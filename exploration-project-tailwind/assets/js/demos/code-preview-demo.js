export function initCodePreviewDemo() {
  const section = document.getElementById('code-preview');
  if (!section) return;

  const jsSample = `
import React from 'react';
import { Autocomplete, TextField } from '@mui/material';

export default function CountrySelect() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
`.trim();

  const tsSample = `
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

export default function CountrySelect() {
  return (
    <Autocomplete<CountryType>
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password',
          }}
        />
      )}
    />
  );
}
`.trim();

  const htmlSample = `
<section class="premium-layout">
  <div class="content-wrapper">
    <h1>Elevate Your Experience</h1>
    <p>Discover the power of premium UI components.</p>
    <ui-button variant="primary">Get Started</ui-button>
  </div>
</section>
`.trim();

  const cssSample = `
.premium-layout {
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  border-radius: 24px;
  color: white;
  text-align: center;
}

.content-wrapper h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
`.trim();

  section.innerHTML = `
    <div class="demo-wrapper">
      <div class="demo-header-section" style="margin-bottom: 40px; text-align: center;">
        <h2 class="demo-section-title" style="font-size: 2.5rem; margin-bottom: 16px;">Code Preview</h2>
        <p class="demo-section-subtitle" style="max-width: 700px; margin: 0 auto;">
          A high-fidelity code snippet component featuring syntax highlighting, 
          multi-language support (JS/TS tabs), and seamless integration with 
          documentation playgrounds.
        </p>
      </div>

      <div class="demo-sections-container" style="max-width: 1000px; margin: 0 auto; display: flex; flex-direction: column; gap: 48px;">
        
        <!-- 1. JS/TS Tabs (MUI Style) -->
        <div class="demo-block">
          <h3 style="margin-bottom: 12px; font-weight: 700; color: var(--text-primary);">Multi-language Support</h3>
          <p style="color: var(--text-secondary); margin-bottom: 24px;">Perfect for React components where both JS and TS versions are provided.</p>
          <ui-code-preview 
            id="mui-demo"
            label="MUI Autocomplete Demo" 
            js-code="${jsSample.replace(/"/g, '&quot;')}"
            ts-code="${tsSample.replace(/"/g, '&quot;')}"
            html-code="${htmlSample.replace(/"/g, '&quot;')}"
            css-code="${cssSample.replace(/"/g, '&quot;')}"
            expanded="true"
            show-reset="true"
          ></ui-code-preview>
        </div>

        <!-- 2. HTML/CSS Examples -->
        <div class="demo-block">
          <h3 style="margin-bottom: 12px; font-weight: 700; color: var(--text-primary);">HTML & CSS Tabs</h3>
          <p style="color: var(--text-secondary); margin-bottom: 24px;">Useful for showing markup and styling side-by-side.</p>
          <ui-code-preview 
            label="Hero Section" 
            html-code="${htmlSample.replace(/"/g, '&quot;')}"
            css-code="${cssSample.replace(/"/g, '&quot;')}"
            expanded="true"
          ></ui-code-preview>
        </div>

        <!-- 3. Collapsible Playground -->
        <div class="demo-block">
          <h3 style="margin-bottom: 12px; font-weight: 700; color: var(--text-primary);">Collapsible State</h3>
          <p style="color: var(--text-secondary); margin-bottom: 24px;">Default to collapsed to keep documentation clean. Expands with smooth animation.</p>
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-default); border-radius: 12px; padding: 40px; margin-bottom: 16px; display: flex; justify-content: center;">
               <div style="padding: 20px; background: var(--bg-primary); border: 1px solid var(--border-default); border-radius: 8px; box-shadow: var(--shadow-sm); color: var(--text-primary);">
                  Component Preview Area
               </div>
          </div>
          <ui-code-preview 
            label="View Source Code" 
            html-code="${htmlSample.replace(/"/g, '&quot;')}"
            expanded="false"
          ></ui-code-preview>
        </div>

        <!-- 4. Dynamic Languages -->
        <div class="demo-block">
          <h3 style="margin-bottom: 12px; font-weight: 700; color: var(--text-primary);">Dynamic Languages</h3>
          <p style="color: var(--text-secondary); margin-bottom: 24px;">Support for arbitrary languages (C#, Python, Java, etc.) via <code>snippets</code> prop.</p>
          <div id="dynamic-lang-demo"></div>
        </div>

      </div>
    </div>

    <style>
      .demo-block {
        background: var(--bg-primary);
        padding: 32px;
        border-radius: 20px;
        border: 1px solid var(--border-default);
        box-shadow: var(--shadow-sm);
      }
    </style>
  `;

  // Handle Dynamic Language Construction
  const dynamicContainer = section.querySelector('#dynamic-lang-demo');
  if (dynamicContainer) {
    const csharpCode = `
public class HelloWorld {
  public static void main(string[] args) {
    Console.WriteLine("Hello World!");
  }
}
`.trim();

    const pythonCode = `
def hello_world():
    print("Hello World!")

if __name__ == "__main__":
    hello_world()
`.trim();

    const javaCode = `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
`.trim();

    const preview = document.createElement('ui-code-preview');
    preview.setAttribute('label', 'Backend Examples');
    preview.setAttribute('expanded', 'true');
    preview.snippets = [
      { language: 'csharp', code: csharpCode, label: 'C#' },
      { language: 'python', code: pythonCode, label: 'Python' },
      { language: 'java', code: javaCode, label: 'Java' },
    ];
    dynamicContainer.appendChild(preview);
  }

  // Handle reset event
  const muiDemo = section.querySelector('#mui-demo');
  muiDemo?.addEventListener('uiReset', () => {
    const originalLabel = muiDemo.getAttribute('label');
    muiDemo.setAttribute('label', originalLabel + ' (Reset!)');
    setTimeout(() => muiDemo.setAttribute('label', originalLabel), 2000);
  });
}
