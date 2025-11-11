// Cusdis Azerbaijani Translation Script
console.log('Cusdis AZ script loaded');

// CSS injection to hide all placeholders
function injectTranslationCSS() {
  var style = document.createElement('style');
  style.innerHTML = `
    /* Hide all placeholders in iframe */
    #cusdis_thread iframe input::placeholder,
    #cusdis_thread iframe textarea::placeholder { 
      opacity: 0 !important; 
      visibility: hidden !important;
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}

window.cusdisTranslate = function() {
  console.log('Attempting translation...');
  
  var attempts = 0;
  var maxAttempts = 20;
  
  function tryTranslate() {
    attempts++;
    console.log('Translation attempt', attempts);
    
    // Try to access iframe
    var iframe = document.querySelector('#cusdis_thread iframe');
    if (iframe) {
      console.log('Found iframe:', iframe.src);
      
      // Direct DOM manipulation attempts
      try {
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc) {
          console.log('Accessing iframe document');
          translateInDocument(iframeDoc);
        }
      } catch (e) {
        console.log('Cannot access iframe content due to CORS:', e);
      }
    }
    
    // Also try main document
    translateInDocument(document);
    
    // Continue trying
    if (attempts < maxAttempts) {
      setTimeout(tryTranslate, 2000);
    }
  }
  
  function translateInDocument(doc) {
    // Try to find and translate all form elements
    var allInputs = doc.querySelectorAll('input, textarea, button, label');
    console.log('Found form elements:', allInputs.length);
    
    for (var i = 0; i < allInputs.length; i++) {
      var element = allInputs[i];
      var tag = element.tagName.toLowerCase();
      
      if (tag === 'input') {
        // Remove all placeholders from inputs
        element.placeholder = "";
        element.setAttribute('placeholder', '');
        element.removeAttribute('placeholder');
        
      } else if (tag === 'textarea') {
        // Remove placeholder from textarea
        element.placeholder = "";
        element.setAttribute('placeholder', '');
        element.removeAttribute('placeholder');
        
      } else if (tag === 'button') {
        var text = element.textContent || element.innerText || '';
        if (text.toLowerCase().includes('send') || text.toLowerCase().includes('submit') || text.toLowerCase().includes('reply')) {
          element.textContent = "Göndər";
          element.innerText = "Göndər";
        }
      } else if (tag === 'label') {
        // Keep labels as they are - don't modify them
        console.log('Found label, keeping it:', element.textContent);
      }
    }
  }
  
  setTimeout(tryTranslate, 1000);
};

// Theme detection and comment styling
function updateCommentsTheme() {
  var html = document.querySelector('html');
  var theme = html.getAttribute('data-theme');
  var commentsSection = document.querySelector('.comments-section');
  var cusdisThread = document.querySelector('#cusdis_thread');
  
  console.log('Current theme:', theme);
  
  var isDark = false;
  
  if (theme === 'dark') {
    isDark = true;
  } else if (theme === 'light') {
    isDark = false;
  } else {
    // Auto mode - check system preference
    isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  console.log('Is dark theme:', isDark);
  
  // Set data-theme on Cusdis element
  if (cusdisThread) {
    cusdisThread.setAttribute('data-theme', isDark ? 'dark' : 'light');
    console.log('Set Cusdis data-theme to:', isDark ? 'dark' : 'light');
  }
  
  if (commentsSection) {
    // Remove existing theme classes
    commentsSection.classList.remove('theme-light', 'theme-dark');
    
    // Add appropriate theme class
    if (isDark) {
      commentsSection.classList.add('theme-dark');
      console.log('Applied dark theme to comments');
    } else {
      commentsSection.classList.add('theme-light');
      console.log('Applied light theme to comments');
    }
  }
}

// Watch for theme changes
function watchThemeChanges() {
  var html = document.querySelector('html');
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
        console.log('Theme changed, updating comments');
        setTimeout(updateCommentsTheme, 100);
      }
    });
  });
  
  observer.observe(html, { 
    attributes: true, 
    attributeFilter: ['data-theme'] 
  });
}

// Run translation on load
window.addEventListener('load', function() {
  console.log('Page loaded, starting translation');
  injectTranslationCSS();
  window.cusdisTranslate();
  updateCommentsTheme();
  watchThemeChanges();
});

// Also try after a delay
setTimeout(function() {
  console.log('Delayed translation attempt');
  window.cusdisTranslate();
  updateCommentsTheme();
}, 3000);

// Set up mutation observer
var observer = new MutationObserver(function(mutations) {
  console.log('DOM mutation detected');
  var shouldTranslate = false;
  
  for (var i = 0; i < mutations.length; i++) {
    if (mutations[i].addedNodes.length > 0) {
      for (var j = 0; j < mutations[i].addedNodes.length; j++) {
        var node = mutations[i].addedNodes[j];
        if (node.nodeType === 1) { // Element node
          console.log('New element added:', node.tagName, node.id, node.className);
          if (node.tagName === 'IFRAME') {
            setTimeout(sendTranslationMessage, 1000);
          }
          shouldTranslate = true;
          break;
        }
      }
    }
    if (shouldTranslate) break;
  }
  
  if (shouldTranslate) {
    console.log('Triggering translation due to DOM change');
    setTimeout(window.cusdisTranslate, 500);
    setTimeout(sendTranslationMessage, 1000);
  }
});

// Start observing
setTimeout(function() {
  console.log('Setting up DOM observer');
  observer.observe(document.body, { 
    childList: true, 
    subtree: true,
    attributes: false 
  });
}, 1000);

// Force iframe height adjustment
function adjustIframeHeight() {
  var iframe = document.querySelector('#cusdis_thread iframe');
  if (iframe) {
    console.log('Adjusting iframe height');
    iframe.style.height = 'auto';
    iframe.style.minHeight = '400px';
    iframe.style.overflow = 'visible';
    iframe.style.border = 'none';
  }
}

// Run height adjustment periodically
setInterval(function() {
  adjustIframeHeight();
}, 2000);