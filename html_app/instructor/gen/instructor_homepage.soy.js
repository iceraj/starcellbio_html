// This file was automatically generated from instructor_homepage.soy.
// Please don't edit this file by hand.

if (typeof scb_instructor_homepage == 'undefined') { var scb_instructor_homepage = {}; }


scb_instructor_homepage.display_header = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_instructor_header\' role=\'header\'><div alt=\'\' class=\'scb_s_header_line_top\' ></div><h1 class=\'scb_s_logo_h1\' aria-label=\'StarCellBio Home Page Link\' ><a aria-hidden=\'true\' href=\'', (opt_data.context.auth && opt_data.context.auth.logged_in) ? '#view=assignments' : '#view=homepage', '\'>StarCellBio<img class=\'scb_s_logo\' src=\'images/header/scb_logo.png\' role=\'banner\'></a></h1><span class=\'scb_s_header_tools\'><span class=\'scb_f_contact\' target=\'_blank\' role=\'link\'  aria-label=\'Contact\'><img class=\'scb_s_envelope_icon\' src=\'images/header/scb_envelope_icon.png\' alt=\'\' role=\'presentation\'><span class=\'scb_s_envelope_text scb_s_header_tools_text\'  role=\'presentation\'>CONTACT</span></span><img class=\'scb_s_header_vertical_line\' src=\'images/header/scb_vertical_divider.png\' alt=\'\' role=\'presentation\'><a class=\'scb_f_reference\' href=\'/static/ref_lib/full_library.html#\'   aria-label=\'Library\' target=\'_blank\'><img class=\'scb_s_cabinet_icon\' src=\'images/header/scb_cabinet_icon.png\' alt=\'\' role=\'presentation\'><span class=\'scb_s_cabinet_text scb_s_header_tools_text\' >LIBRARY</span></a><img class=\'scb_s_header_vertical_line\' src=\'images/header/scb_vertical_divider.png\' role=\'presentation\'><!--href=\'pdf/StarCellBio%20User%20Guide.pdf\' target=\'_blank\'--><span class=\'scb_f_user_guide\' role=\'link\'  aria-label=\'User Guide\' ><img class=\'scb_s_user_guide_icon\' src=\'images/header/scb_user_guide_icon.png\' role=\'presentation\'><span class=\'scb_s_user_guide_text scb_s_header_tools_text\' role=\'presentation\'  >USER GUIDE</span></span><img class=\'scb_s_header_vertical_line\' src=\'images/header/scb_vertical_divider.png\' alt=\'\' role=\'presentation\'><a class=\'scb_f_login\' href=\'#view=assignments\' role=\'presentation\' aria-label=\'Sign In link\'><span class=\'scb_s_login_status\' aria-hidden=\'true\'>', (opt_data.context.auth && opt_data.context.auth.logged_in) ? 'SIGN OUT' : 'SIGN IN', '</span></a></span></div>');
  return opt_sb ? '' : output.toString();
};


scb_instructor_homepage.display_footer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_footer\' role=\'footer\'><a href="http://web.mit.edu/" role=\'link\'><img class=\'scb_s_instructor_homepage_footer_logo\' src=\'images/homepage/mit_logo.png\' alt=\'MIT Logo\'></a><img class=\'scb_s_instructor_homepage_footer_divider\' role=\'presentation\'  src=\'images/homepage/small_divider.png\' alt=\'\'><a href=\'http://star.mit.edu/about.html\' role=\'link\'  aria-label=\'About Star\' target=\'_blank\'><span aria-hidden=\'true\' class=\'scb_s_instructor_homepage_footer_about\' src=\'images/homepage/about_star.png\'>About STAR</span></a><img class=\'scb_s_instructor_homepage_footer_divider\' role=\'presentation\'  src=\'images/homepage/small_divider.png\' alt=\'\'><a href=\'http://star.mit.edu/cellbio/support.html\' role=\'link\' aria-label=\'Funding\'   target=\'_blank\'><span aria-hidden=\'true\' class=\'scb_s_instructor_homepage_footer_support\' src=\'images/homepage/support.png\'>Funding</span></a></div>');
  return opt_sb ? '' : output.toString();
};


scb_instructor_homepage.display_assignment_navigation = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_assignment_outline_description \'><div class=\'scb_s_outline_title\'>Builder Outline:</div></div>');
  return opt_sb ? '' : output.toString();
};
