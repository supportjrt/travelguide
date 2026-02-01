
export const generateEmailTemplate = (data: { phone: string; name?: string; time?: string; timezone?: string }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Travel Expert Connection Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; }
        .header { background-color: #f97316; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { padding: 20px; background-color: white; border: 1px solid #ddd; border-top: none; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        .label { font-weight: bold; color: #555; }
        .value { color: #000; font-size: 1.1em; }
        .footer { text-align: center; margin-top: 20px; font-size: 0.8em; color: #888; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Lead Received</h1>
        </div>
        <div class="content">
          <p>You have received a new request to connect with a travel expert.</p>
          
          <div class="field">
            <div class="label">Phone Number</div>
            <div class="value">${data.phone}</div>
          </div>

          ${data.name ? `
          <div class="field">
            <div class="label">Name</div>
            <div class="value">${data.name}</div>
          </div>
          ` : ''}

          ${data.timezone ? `
          <div class="field">
            <div class="label">Preferred Time</div>
            <div class="value">${data.time} (${data.timezone})</div>
          </div>
          ` : ''}

          <p>Please contact this potential client as soon as possible.</p>
        </div>
        <div class="footer">
          <p>Travel Guide Automated Notification</p>
        </div>
      </div>
    </body>
    </html>
  `;
};
