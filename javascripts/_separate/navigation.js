var currentHashNav = null;

//Call this, passing it a callback function
function initHashNav(callback) {
  if (!callback) return false;

  if (typeof callback !== "function") {
    throw "Sorry, that url does not exist. Please try again.";
    return false;
  }

  if ("onhashchange" in window) {
      window.onhashchange = function(){checkHash(callback);};
  } else {
      setInterval(function(){checkHash(callback);}, 100);
  }

  checkHash(callback);
}

//Function called onhashchange or on loop (for older browsers)
function checkHash(callback) {
  if (window.location.hash.replace(/^#/i,"") !== currentHashNav) {
    var newHash = window.location.hash.replace(/^#/i,"");

    var chopped = chopHash(newHash);
    callback(chopped);

    currentHashNav = newHash;
  }
}

function chopHash(hash) {
  //Do something with the new hash
  var hash = {
    raw: hash,
    base: decodeURIComponent(hash),
    parameters: null
  }

  return hash;
}

// helper function for querySelectorAll
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// helper function for hasClass
Element.prototype.hasClass = function(className) {
    return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

function updateNav(hash) {
  var hashValue = hash.raw;
  var removeCurrent = document.querySelectorAll('#filter .current');

  forEach(removeCurrent, function (index, value) {
    value.classList.remove('current');
  });

  var navValue = document.getElementById('nav-country-' + hashValue);
  navValue.setAttribute("class", "current");

  if (!hashValue || 0 === hashValue.length) {
        var showAllHidden = document.querySelectorAll('#list article.hidden');
        forEach(showAllHidden, function (index, value) {
          value.classList.remove('hidden');
        });
    } else {
            var allArticles = document.querySelectorAll('#list article');
            forEach(allArticles, function (index, value) {
            if (value.hasClass(hashValue)) {
                value.classList.remove('hidden');
            } else {
                value.classList.add('hidden');
            }
        });
    }
}

initHashNav(updateNav);
