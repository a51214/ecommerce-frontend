const JsHelper = {
    closest: function(el, selector) {
        var matchesFn;

        // find vendor prefix
        ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
            if (typeof document.body[fn] == 'function') {
                matchesFn = fn;
                return true;
            }
            return false;
        })

        var parent;
        // traverse parents
        while (el) {
            parent = el.parentElement;
            if (parent && parent[matchesFn](selector)) {
                return parent;
            }
            el = parent;
        }
        return null;
    },
    hasClass: function(ele, cls) {
        return ele.getAttribute('class').indexOf(cls) > -1;
    },
    addClass: function(ele, cls) {
        if (ele.classList) {
            ele.classList.add(cls);
        } else if (!hasClass(ele, cls)) {
            ele.setAttribute('class', ele.getAttribute('class') + ' ' + cls);
        }
    },
    removeClass: function(ele, cls) {
        if (ele.classList) {
            ele.classList.remove(cls);
        } else if (hasClass(ele, cls)) {
            ele.setAttribute('class', ele.getAttribute('class').replace(cls, ' '));
        }
    }
};

export default JsHelper;
