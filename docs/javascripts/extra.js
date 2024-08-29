document.getElementById('bug-report-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const issue = document.getElementById('issue').value;
    const webhookURL = 'https://discord.com/api/webhooks/1271699331971547136/d_QrSAydEB8M2USVGFJVEa5nWQDNQAWPy3P4L4t6xjZvlqAtISynHE9-D4unBTSW31nJ';
  
    const payload = {
      content: `**New Report**\n**User:** ${username}\n**Issue/Request:** ${issue}`
    };
  
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('response-message').textContent = 'Report sent successfully!';
      } else {
        document.getElementById('response-message').textContent = 'Failed to send report.';
      }
    })
    .catch(error => {
      document.getElementById('response-message').textContent = 'Error sending report: ' + error.message;
    });
  });
  