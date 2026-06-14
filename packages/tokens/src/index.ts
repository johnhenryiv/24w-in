/**
 * 24W.IN Design Tokens
 * Single source of truth for all design system values.
 *
 * Usage in app code:
 *   import '@24w/tokens/css';
 *   import tokens from '@24w/tokens/tokens';
 */

// Export the tokens object for programmatic use
export { default as tokens } from './tokens.json';

// The CSS imports are handled by the app's root layout
// which imports tokens.css and colors_and_type.css
// in order, setting data-theme="dark" on <html>
