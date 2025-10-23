<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact | Chiranjit Chakma</title>
  <link rel="stylesheet" href="style.css" />
  <script src="https://kit.fontawesome.com/a2e0b2b6a1.js" crossorigin="anonymous"></script>
</head>
<body>
  <!-- ==========================================
       NAVBAR (your existing navbar goes here)
  ========================================== -->
  <nav class="navbar">
    <div class="nav-links">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </div>
  </nav>

  <!-- ==========================================
       CONTACT SECTION
  ========================================== -->
  <section id="contact" class="contact-section">
    <div class="container">
      <h2 class="section-title">Contact Me</h2>
      <p class="section-subtitle">Let’s work together or just say hello 👋</p>

      <form
        id="contactForm"
        action="https://api.web3forms.com/submit"
        method="POST"
        class="contact-form"
      >
        <!-- Web3Forms Access Key -->
        <input
          type="hidden"
          name="access_key"
          value="YOUR-WEB3FORMS-ACCESS-KEY-HERE"
        />

        <!-- Name -->
        <div class="form-group">
          <label for="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <!-- Message -->
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message (max 300 characters)"
            maxlength="300"
            required
          ></textarea>
          <!-- Live Character Counter -->
          <small id="charCount" class="char-count">300 characters left</small>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-btn">
          <i class="fas fa-paper-plane"></i> Send Message
        </button>
      </form>

      <!-- Success or Error Message -->
      <div id="successMessage" class="success-message">
        <span>Message sent successfully!</span>
      </div>
    </div>
  </section>

  <script src="script.js"></script>
</body>
</html>
