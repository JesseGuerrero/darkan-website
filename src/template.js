export default ({ body, title, startState }) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <script>window.__APP_INITIAL_STATE__ = ${startState}</script>
          <title>${title}</title>
          <link rel="stylesheet" href="/assets/index.css" />
        </head>
        
        <body>
          <div id="root">${body}</div>
        </body>
        
        <script src="/assets/bundle.js"></script>
      </html>
    `;
  };