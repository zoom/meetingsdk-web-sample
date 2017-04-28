(function($) {
/**
* i18n provides a mechanism for translating strings using a jscript dictionary.
*
*/
var __slice = Array.prototype.slice;
/*
* i18n property list
*/
var i18n = {
	dict: null,
	/**
	* load()
	* Load translations.
	*
	* @param property_list i18n_dict : The dictionary to use for translation.
	*/
	load: function(i18n_dict) {
		if (this.dict !== null) {
			$.extend(this.dict, i18n_dict);
		} else {
			this.dict = i18n_dict;
		}
	},
	/**
	* _()
	*
	* Looks the given string up in the dictionary and returns the translation if
	* one exists. If a translation is not found, returns the original word.
	*
	* @param string str : The string to translate.
	* @param property_list params.. : params for using printf() on the string.
	*
	* @return string : Translated word.
	*/
	get: function (str) {
		dict = this.dict;
		if (dict && dict.hasOwnProperty(str)) {
			str = dict[str];
		}
		if(arguments.length==1){
			return str;
		}
		args = __slice.call(arguments);
		args[0] = str;
		// Substitute any params.
		return this.printf.apply(this, args);
	},
	
	/*
	* printf()
	*
	* Substitutes %s with parameters given in list. %%s is used to escape %s.
	*
	* @param string str : String to perform printf on.
	* @param string args : Array of arguments for printf.
	*
	* @return string result : Substituted string
	*/
	printf: function(str, args) {
		if (arguments.length < 2) return str;
		args = $.isArray(args) ? args : __slice.call(arguments, 1);
		return str.replace(/\{(\d+)\}/g, function(p0, p, position) {
				if (args[parseInt(p)] !== undefined) {
					return args[parseInt(p)];
			}
			return p0;
		});
	}
};

$.i18n = i18n;

})(jQuery);