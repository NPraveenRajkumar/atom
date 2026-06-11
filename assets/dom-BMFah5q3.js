/**
 * Finds the nearest ancestor that creates a new containing block for position:fixed elements.
 * This function is fully Shadow DOM and Flat Tree aware, accounting for slots and shadow boundaries.
 */
function getTransformedAncestor(element) {
    let el = element;
    while (el && el !== document.documentElement) {
        // If it's not a standard element (e.g. ShadowRoot), jump to its host
        if (el.nodeType !== 1) {
            el = el.host || el.parentNode;
            continue;
        }
        const style = window.getComputedStyle(el);
        if (!style) {
            // Move up the tree (Flat Tree aware)
            el = el.assignedSlot || el.parentElement || el.getRootNode().host;
            continue;
        }
        const s = style;
        const transform = s.transform || s.webkitTransform || s.mozTransform || s.msTransform || s.oTransform;
        const translate = s.translate || '';
        const rotate = s.rotate || '';
        const scale = s.scale || '';
        const filter = s.filter || s.webkitFilter || s.mozFilter || s.msFilter || s.oFilter;
        const backdropFilter = s.backdropFilter || s.webkitBackdropFilter || s.mozBackdropFilter || s.msBackdropFilter || s.oBackdropFilter;
        const perspective = s.perspective || s.webkitPerspective || s.mozPerspective || s.msPerspective || s.oPerspective;
        const mask = s.mask || s.webkitMask || '';
        const clipPath = s.clipPath || s.webkitClipPath || '';
        const willChange = s.willChange || '';
        const hasTransform = (transform && transform !== 'none') || (translate && translate !== 'none') || (rotate && rotate !== 'none') || (scale && scale !== 'none');
        const hasFilter = filter && filter !== 'none';
        const hasBackdropFilter = backdropFilter && backdropFilter !== 'none';
        const hasPerspective = perspective && perspective !== 'none';
        const hasMask = mask && mask !== 'none';
        const hasClipPath = clipPath && clipPath !== 'none';
        const hasWillChange = willChange &&
            (willChange.includes('transform') ||
                willChange.includes('perspective') ||
                willChange.includes('filter') ||
                willChange.includes('backdrop-filter') ||
                willChange.includes('translate') ||
                willChange.includes('rotate') ||
                willChange.includes('scale') ||
                willChange.includes('mask') ||
                willChange.includes('clip-path') ||
                willChange.includes('contain'));
        // contain: layout, paint, strict, or content also creates a containing block
        const contain = style.contain;
        const hasContain = contain && (contain.includes('layout') || contain.includes('paint') || contain.includes('strict') || contain.includes('content'));
        if (hasTransform || hasFilter || hasBackdropFilter || hasPerspective || hasMask || hasClipPath || hasWillChange || hasContain) {
            return el;
        }
        // Move up (Flat Tree aware)
        // Priority: 1. Assigned Slot (for projected content) 2. Parent Element 3. Shadow Host
        el = el.assignedSlot || el.parentElement || el.getRootNode().host;
    }
    return null;
}
/**
 * Returns the viewport-relative offset of the nearest transformed ancestor.
 */
function getTransformedAncestorOffset(element) {
    const ancestor = getTransformedAncestor(element);
    if (ancestor) {
        const rect = ancestor.getBoundingClientRect();
        return { x: rect.left, y: rect.top, el: ancestor };
    }
    return { x: 0, y: 0, el: null };
}
/**
 * Calculates a robust, environment-proof position for floating elements (dropdowns, menus).
 * It automatically handles:
 * 1. Nested CSS transforms (containing blocks)
 * 2. Viewport boundary detection (clamping)
 * 3. Vertical space detection (flipping top/bottom)
 * 4. Aligning to trigger element
 */
/**
 * Modern auto-update utility that tracks element positions and re-triggers placement logic.
 */
function autoUpdate(reference, floating, update, options = {}) {
    const { animationFrame = false } = options;
    let frameId = null;
    const handleUpdate = () => {
        update();
        if (animationFrame) {
            frameId = requestAnimationFrame(handleUpdate);
        }
    };
    if (animationFrame) {
        frameId = requestAnimationFrame(handleUpdate);
    }
    else {
        update(); // Initial update
    }
    window.addEventListener('scroll', update, { capture: true, passive: true });
    window.addEventListener('resize', update, { passive: true });
    const resizeObserver = new ResizeObserver(() => update());
    resizeObserver.observe(reference);
    resizeObserver.observe(floating);
    const cleanup = () => {
        if (frameId !== null)
            cancelAnimationFrame(frameId);
        window.removeEventListener('scroll', update, { capture: true });
        window.removeEventListener('resize', update);
        resizeObserver.disconnect();
    };
    return cleanup;
}
/**
 * Calculates a robust, environment-proof position for floating elements (popovers, dropdowns, menus).
 * Supports all 4 sides, alignment, and boundary detection.
 */
function calculateUniversalPlacement(trigger, options) {
    const { menuWidth, menuHeight, gap = 4, placement = 'auto', align = 'center', padding = 8, useTransformedAncestorOffset = true } = options;
    if (!trigger) {
        return { left: 0, top: 0, width: 0, availableWidth: 0, availableHeight: 0, placement: 'bottom', isClamped: false };
    }
    const triggerRect = trigger.getBoundingClientRect();
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const ancestorOffset = useTransformedAncestorOffset
        ? getTransformedAncestorOffset(trigger)
        : { x: 0, y: 0, el: null };
    // 1. Determine Vertical/Horizontal Placement
    const requestedPlacement = placement === 'auto' ? 'bottom' : placement;
    let finalPlacement = requestedPlacement;
    if (placement === 'auto') {
        const spaceBelow = screenH - triggerRect.bottom - gap - padding;
        const spaceAbove = triggerRect.top - gap - padding;
        const spaceRight = screenW - triggerRect.right - gap - padding;
        const spaceLeft = triggerRect.left - gap - padding;
        // Preference: If requestedPlacement is blocked, try opposite, then try other axis if both blocked
        if (requestedPlacement === 'bottom' && spaceBelow < menuHeight && spaceAbove > spaceBelow) {
            finalPlacement = 'top';
        }
        else if (requestedPlacement === 'top' && spaceAbove < menuHeight && spaceBelow > spaceAbove) {
            finalPlacement = 'bottom';
        }
        else if (requestedPlacement === 'right' && spaceRight < menuWidth && spaceLeft > spaceRight) {
            finalPlacement = 'left';
        }
        else if (requestedPlacement === 'left' && spaceLeft < menuWidth && spaceRight > spaceLeft) {
            finalPlacement = 'right';
        }
        // Secondary: If still not enough space on the main axis, pick the one with most space
        if (finalPlacement === 'top' || finalPlacement === 'bottom') {
            if (Math.max(spaceAbove, spaceBelow) < menuHeight) {
                if (spaceRight >= menuWidth || spaceLeft >= menuWidth) {
                    finalPlacement = spaceRight > spaceLeft ? 'right' : 'left';
                }
            }
        }
        else {
            if (Math.max(spaceLeft, spaceRight) < menuWidth) {
                if (spaceAbove >= menuHeight || spaceBelow >= menuHeight) {
                    finalPlacement = spaceAbove > spaceBelow ? 'top' : 'bottom';
                }
            }
        }
    }
    // 2. Calculate initial coordinates and available dimensions
    let left = 0;
    let top = 0;
    let availableWidth = screenW - (padding * 2);
    let availableHeight = screenH - (padding * 2);
    switch (finalPlacement) {
        case 'top':
            top = triggerRect.top - menuHeight - gap;
            availableHeight = triggerRect.top - gap - padding;
            break;
        case 'bottom':
            top = triggerRect.bottom + gap;
            availableHeight = screenH - triggerRect.bottom - gap - padding;
            break;
        case 'left':
            left = triggerRect.left - menuWidth - gap;
            availableWidth = triggerRect.left - gap - padding;
            break;
        case 'right':
            left = triggerRect.right + gap;
            availableWidth = screenW - triggerRect.right - gap - padding;
            break;
    }
    // Handle alignment for the cross-axis
    if (finalPlacement === 'top' || finalPlacement === 'bottom') {
        // Horizontal alignment
        if (align === 'start')
            left = triggerRect.left;
        else if (align === 'end')
            left = triggerRect.right - menuWidth;
        else
            left = triggerRect.left + (triggerRect.width / 2) - (menuWidth / 2);
        availableWidth = screenW - (padding * 2);
    }
    else {
        // Vertical alignment
        if (align === 'start')
            top = triggerRect.top;
        else if (align === 'end')
            top = triggerRect.bottom - menuHeight;
        else
            top = triggerRect.top + (triggerRect.height / 2) - (menuHeight / 2);
        availableHeight = screenH - (padding * 2);
    }
    // Apply ancestor offset
    left -= ancestorOffset.x;
    top -= ancestorOffset.y;
    // 3. Clamping to viewport (account for transform ancestors)
    const containerWidth = ancestorOffset.el ? ancestorOffset.el.getBoundingClientRect().width : screenW;
    const containerHeight = ancestorOffset.el ? ancestorOffset.el.getBoundingClientRect().height : screenH;
    const originalLeft = left;
    const originalTop = top;
    // Cross-axis clamping
    if (finalPlacement === 'top' || finalPlacement === 'bottom') {
        left = Math.max(padding, Math.min(left, containerWidth - menuWidth - padding));
    }
    else {
        top = Math.max(padding, Math.min(top, containerHeight - menuHeight - padding));
    }
    const isClamped = left !== originalLeft || top !== originalTop;
    // 4. Calculate arrow position (local to the floating element)
    let arrowX = 0;
    let arrowY = 0;
    const arrowPadding = 12; // Minimum distance from corners
    if (finalPlacement === 'top' || finalPlacement === 'bottom') {
        const triggerCenter = triggerRect.left + (triggerRect.width / 2);
        const menuAbsoluteLeft = left + ancestorOffset.x;
        arrowX = triggerCenter - menuAbsoluteLeft;
        arrowX = Math.max(arrowPadding, Math.min(arrowX, menuWidth - arrowPadding));
    }
    else {
        const triggerCenter = triggerRect.top + (triggerRect.height / 2);
        const menuAbsoluteTop = top + ancestorOffset.y;
        arrowY = triggerCenter - menuAbsoluteTop;
        arrowY = Math.max(arrowPadding, Math.min(arrowY, menuHeight - arrowPadding));
    }
    return {
        left,
        top,
        width: menuWidth,
        availableWidth,
        availableHeight,
        placement: finalPlacement,
        isClamped,
        arrowX,
        arrowY
    };
}
/**
 * Corrects viewport-relative coordinates (e.g., from MouseEvent.clientX/Y)
 * to work correctly when the target element is inside a transformed container.
 */
function correctViewportCoordinates(x, y, element) {
    const offset = getTransformedAncestorOffset(element);
    return {
        x: x - offset.x,
        y: y - offset.y,
    };
}

export { autoUpdate as a, correctViewportCoordinates as b, calculateUniversalPlacement as c, getTransformedAncestorOffset as g };
