# Report an Issue or Request a Feature

The form below lets you send a report, request, or whatever to the creator of the module himself, think about what you say because there is a **5 minute cooldown between report sends**

<form id="bug-report-form" class="report-form">
  <div class="form-group">
    <label for="username" style="color: #fff;">Discord Username (@ExampleName) or method I can contact you back with:</label><br>
    <input type="text" id="username" name="username" style="background-color: #444; color: #fff; border: 3px solid #6d33ff; border-radius: 9px; padding: 10px; width: 100%;" required>
  </div>
  
  <div class="form-group">
    <label for="issue" style="color: #fff;">Issue/Request:</label><br>
    <textarea id="issue" name="issue" rows="5" style="background-color: #444; color: #fff; border: 3px solid #6d33ff; border-radius: 9px; padding: 10px; width: 100%;" required></textarea>
  </div>
  
  <button type="submit" id="submit-button" class="md-button md-button--primary">Send</button>
</form>

<div id="response-message" class="response-message" style="color: #000000; margin-top: 15px;"></div>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const cooldownTime = 5 * 60 * 1000;
  const lastSubmitTime = localStorage.getItem('lastSubmitTime');
  const currentTime = new Date().getTime();
  const submitButton = document.getElementById('submit-button');

  if (lastSubmitTime && (currentTime - lastSubmitTime < cooldownTime)) {
    disableSubmitButton(currentTime, lastSubmitTime, cooldownTime);
  }

  document.getElementById('bug-report-form').addEventListener('submit', function(event) {
    event.preventDefault();

    if (submitButton.disabled) {
      return;
    }

    const username = document.getElementById('username').value;
    const issue = document.getElementById('issue').value;
    const tutrtl = 'aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTI3MTY5OTMzMTk3MTU0NzEzNi9kX1FyU0F5ZEVCOE0yVVNWR0ZKVkVhNW5XUUROUUFXUHkzUDRMNHQ2eGpadmxxQXRJU3luSEU5LUQ0dW5CVFNXMzFuSg==';
    const dudrdl = atob(tutrtl);
    const payload = {
      content: `<@1027686323282260069>\n **New Report**\n**Discord User:** ${username}\n**Issue/Request:** ${issue}`
    };

    fetch(dudrdl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        setButtonStatus('Sent! :)');
        localStorage.setItem('lastSubmitTime', new Date().getTime());
        disableSubmitButton(new Date().getTime(), new Date().getTime(), cooldownTime);
      } else {
        setButtonStatus('Failed to send :(');
      }
    })
    .catch(error => {
      setButtonStatus('Error sending report :(');
    });
  });

  function setButtonStatus(status) {
    submitButton.textContent = status;
    submitButton.style.width = "auto";
    submitButton.disabled = true;

    setTimeout(() => {
      resetButton();
    }, 10000);
  }

  function resetButton() {
    submitButton.textContent = 'Send';
    submitButton.style.width = "";
    submitButton.disabled = false;
  }

  function disableSubmitButton(currentTime, lastSubmitTime, cooldownTime) {
    submitButton.disabled = true;
    let remainingTime = (cooldownTime - (currentTime - lastSubmitTime)) / 1000;
    
    const interval = setInterval(() => {
      if (remainingTime <= 0) {
        clearInterval(interval);
        resetButton();
        return;
      }
      submitButton.textContent = `Cooldown: ${Math.floor(remainingTime / 60)}:${String(Math.floor(remainingTime % 60)).padStart(2, '0')} min`;
      remainingTime--;
    }, 1000);
    
    submitButton.classList.add('disabled');
  }
});
</script>

<style>
  .md-button.disabled {
    cursor: not-allowed;
  }

  #submit-button {
    background-color: #6d33ff;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    transition: width 0.3s ease, padding 0.3s ease;
  }
</style>
