const COMPONENT_SIZE_ALIAS_MAP = {
    xxxs: 'xxxs',
    xxs: 'xxs',
    xs: 'xs',
    sm: 'sm',
    small: 'sm',
    md: 'md',
    medium: 'md',
    lg: 'lg',
    large: 'lg',
    xl: 'xl',
    xlarge: 'xl',
    'extra-large': 'xl',
    extralarge: 'xl',
    xxl: 'xxl',
    xxxl: 'xxxl',
    default: 'md',
};
function normalizeComponentSize(size, fallback = 'md') {
    const rawSize = String(size ?? fallback).trim();
    if (!rawSize) {
        return fallback;
    }
    return COMPONENT_SIZE_ALIAS_MAP[rawSize.toLowerCase()] ?? rawSize;
}

export { normalizeComponentSize as n };
