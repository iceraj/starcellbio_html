// This file was automatically generated from facs.soy.
// Please don't edit this file by hand.

if (typeof scb_facs == 'undefined') { var scb_facs = {}; }


scb_facs.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_facs_view\' >');
  scb_homepage.display_header(opt_data, output);
  scb_common.assignment_step({step: 6, last_step: opt_data.last_step, prev_step: opt_data.prev_step, assignment_name: opt_data.assignment.name, experiment_name: opt_data.experiment.name, assignment: opt_data.assignment, experiment: opt_data.experiment, technique_name: 'FLOW CYTOMETRY', technique_view: 'facs', technique_param: 'facs_id', technique_id: opt_data.facs.id}, output);
  scb_facs.display_details(opt_data, output);
  scb_homepage.display_footer({global_template: opt_data.t, assignment: opt_data.assignment}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


scb_facs.display_details = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_facs_container\' role=\'main\'><div class=\'scb_facs_details_view\'>');
  scb_common.experiment_step({step: 6, last_step: 6, assignment: opt_data.assignment, experiment: opt_data.experiment}, output);
  output.append('<div class=\'scb_s_facs_all_tabs\'><div class=\'scb_facs_details_view_inner\'>');
  scb_facs.display_tabs(opt_data, output);
  output.append((opt_data.kind == 'sample_prep') ? '<a class=\'scb_s_navigation_button scb_f_facs_prepare_lysates\' facs_id=\'' + soy.$$escapeHtml(opt_data.facs.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\'' + ((opt_data.can_prepare_lysate) ? '' : 'disabled=\'disabled\'') + '> PREPARE SAMPLES  &nbsp; &#9654;</a>' : '', '</div><a class="scb_s_navigation_button scb_f_open_select_technique scb_s_select_technique_at_facs" href="#view=select_technique&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '" assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\'>&#9664; SELECT TECHNIQUE</a><br/></div></div></div>');
  return opt_sb ? '' : output.toString();
};


scb_facs.display_tabs = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_facs_tab_content ', (opt_data.kind == ' sample_prep') ? 'scb_s_facs_tab_content_sample_prep' : '', '\'>');
  scb_facs.display_tabs_selector(opt_data, output);
  if (opt_data.kind == 'sample_prep') {
    scb_facs.sample_prep(opt_data, output);
    output.append('</div>');
  }
  if (opt_data.kind == 'analyze') {
    scb_facs.analyze(opt_data, output);
    output.append('</div>');
  }
  return opt_sb ? '' : output.toString();
};


scb_facs.display_tabs_selector = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\' ', (opt_data.experiment.facs_list.list.length >= 5) ? 'scb_s_facs_tabs_more ' : ' scb_s_facs_tabs', ' \' role=\'tablist\'>');
  if (opt_data.experiment.facs_list.list.length < 5) {
    var wbList110 = opt_data.experiment.facs_list.list;
    var wbListLen110 = wbList110.length;
    for (var wbIndex110 = 0; wbIndex110 < wbListLen110; wbIndex110++) {
      var wbData110 = wbList110[wbIndex110];
      output.append((opt_data.facs.id == wbData110.id) ? '<span class=\'scb_s_facs_active\' role=\'tab\'><input role=\'input\' class=\'scb_s_facs_selected\' facs_id=\'' + soy.$$escapeHtml(wbData110.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' value=\'' + soy.$$escapeHtml(wbData110.name) + '\' type=\'text\' maxlength=10></input><button class=\'scb_f_facs_remove\' facs_id=\'' + soy.$$escapeHtml(wbData110.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' role=\'button\'>| &#215;</button></span>' : '<a class=\'scb_f_open_facs scb_s_facs_open_facs\' role=\'tab\' href=\'#view=facs&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&facs_id=' + soy.$$escapeHtml(wbData110.id) + '\' facs_id=\'' + soy.$$escapeHtml(wbData110.id) + '\' >' + soy.$$escapeHtml(wbData110.name) + '</a>');
    }
    output.append('<span class=\'scb_s_facs_add_facs\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' facs_id=\'', soy.$$escapeHtml(opt_data.experiment.facs_list.list[opt_data.experiment.facs_list.list.length - 1].id), '\' role=\'tab\'><a class=\'scb_f_open_facs scb_s_facs_open_facs\' href=\'#view=facs&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '\' role=\'presentation\'>ADD<span class=\'scb_s_facs_add_cross_facs\'>| + </span></a></span>');
  } else {
    output.append('<button class=\'scb_s_facs_left_facs\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' role=\'button\'  aria-label=\'Previous Tab\'></button>');
    if (opt_data.experiment.facs_list.list.length - 1 == opt_data.experiment.facs_list.start_tabs_index + 3) {
      var wbList162 = opt_data.experiment.facs_list.list;
      var wbListLen162 = wbList162.length;
      for (var wbIndex162 = 0; wbIndex162 < wbListLen162; wbIndex162++) {
        var wbData162 = wbList162[wbIndex162];
        output.append((wbIndex162 >= opt_data.experiment.facs_list.start_tabs_index && wbIndex162 < opt_data.experiment.facs_list.start_tabs_index + 4) ? (opt_data.facs.id == wbData162.id) ? '<span class=\'scb_s_facs_active scb_s_facs_more_open_facs\' role=\'tab\'><input role=\'input\' class=\'scb_s_facs_selected\' facs_id=\'' + soy.$$escapeHtml(wbData162.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' value=\'' + soy.$$escapeHtml(wbData162.name) + '\' type=\'text\' maxlength=10></input><button class=\'scb_f_facs_remove\' facs_id=\'' + soy.$$escapeHtml(wbData162.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' role=\'button\' aria-label=\'Close Tab\'>| &#215;</button></span>' : '<a class=\'scb_f_open_facs scb_s_facs_open_facs scb_s_facs_more_open_facs\' role=\'tab\' href=\'#view=facs&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&facs_id=' + soy.$$escapeHtml(wbData162.id) + '\' facs_id=\'' + soy.$$escapeHtml(wbData162.id) + '\'>' + soy.$$escapeHtml(wbData162.name) + '</a>' : '');
      }
      output.append('<span class=\'scb_s_facs_add_facs scb_s_facs_more_open_facs\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' facs_id=\'', soy.$$escapeHtml(opt_data.experiment.facs_list.list[opt_data.experiment.facs_list.list.length - 1].id), '\'><a class=\'scb_f_open_facs scb_s_facs_open_facs\' href=\'#view=facs&experiment_id=', soy.$$escapeHtml(opt_data.experiment.id), '&assignment_id=', soy.$$escapeHtml(opt_data.assignment.id), '\' role=\'presentation\'><span class=\'scb_s_add_tab\'>ADD</span><span class=\'scb_s_facs_add_cross_facs\'>| + </span></a></span>');
    } else {
      var wbList207 = opt_data.experiment.facs_list.list;
      var wbListLen207 = wbList207.length;
      for (var wbIndex207 = 0; wbIndex207 < wbListLen207; wbIndex207++) {
        var wbData207 = wbList207[wbIndex207];
        output.append((wbIndex207 >= opt_data.experiment.facs_list.start_tabs_index && wbIndex207 < opt_data.experiment.facs_list.start_tabs_index + 5) ? (opt_data.facs.id == wbData207.id) ? '<span class=\'scb_s_facs_active scb_s_facs_more_open_facs\' role=\'tab\'><input role=\'input\' class=\'scb_s_facs_selected\' facs_id=\'' + soy.$$escapeHtml(wbData207.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' value=\'' + soy.$$escapeHtml(wbData207.name) + '\' type=\'text\' maxlength=10></input><button class=\'scb_f_facs_remove\' facs_id=\'' + soy.$$escapeHtml(wbData207.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' role=\'button\' aria-label=\'Close Tab\'>| &#215;</button></span>' : '<a class=\'scb_f_open_facs scb_s_facs_open_facs scb_s_facs_more_open_facs\' role=\'tab\' href=\'#view=facs&experiment_id=' + soy.$$escapeHtml(opt_data.experiment.id) + '&assignment_id=' + soy.$$escapeHtml(opt_data.assignment.id) + '&facs_id=' + soy.$$escapeHtml(wbData207.id) + '\' facs_id=\'' + soy.$$escapeHtml(wbData207.id) + '\'>' + soy.$$escapeHtml(wbData207.name) + '</a>' : '');
      }
    }
    output.append('<button class=\'scb_s_facs_right_facs\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' role=\'button\'  aria-label=\'Next Tab\'></button>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


scb_facs.sample_prep = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  scb_facs.display_facs_progress({step: 1}, output);
  output.append('<div class=\'scb_s_facs_samples_container\' ><div class=\'scb_s_facs_samples_table\' ><table role=\'grid\'><thead class=\'scb_s_facs_samples_table_head\'><td class=\'scb_s_facs_samples_table_heading sample_prep_select_facs\'  role=\'columnheader\'>Select</td><td class=\'scb_s_facs_samples_table_heading sample_prep_samples_facs\' role=\'columnheader\'>Samples</td><td class=\'scb_s_facs_samples_table_heading sample_prep_cellt_facs\'   role=\'columnheader\'>Cell Treatment<button class=\'scb_f_info_icon scb_s_facs_cell_info\' note=\'scb_f_facs_cell_followup\' role=\'button\' aria-label=\'Cell Treatment Info\'> </button><div class=\'scb_f_facs_cell_followup scb_f_controls_note\'  role=\'note\'><!--<button class=\'scb_f_controls_close_button\' aria-label=\'Close\'>&#215;</button>-->Depending on the type of flow cytometry analysis, the researcher will either use live or fixed (dead) cells. One example of an analysis that is performed on live cells is to analyze cell viability within a sample. Some analyses are performed on fixed cells to enable the dye or other reagents to enter the cells within a sample. &nbsp;<a href="static/ref_lib/full_library.html#FCSamplePreparation" target=\'_blank\' class=\'scb_s_select_technique_learn_more \' role=\'link\'>Learn more &gt;&gt;</a></div></td><td role=\'columnheader\' class=\'scb_s_facs_samples_table_heading sample_prep_dna_facs\'>Flow Cytometry Analysis<button class=\'scb_f_info_icon scb_s_facs_dna_info\' note=\'scb_f_facs_dna_followup\' role=\'button\' aria-label=\'DNA Treatment Info\'> </button><div class=\'scb_f_facs_dna_followup scb_f_controls_note\' role=\'note\'><!--<button class=\'scb_f_controls_close_button\' aria-label=\'Close\'>&#215;</button>-->DNA content treatment is used to measure and analyze a cell\'s amount of DNA. Propidium Iodide (PI) is a fluorescent dye that binds, or intercalates, DNA. &nbsp;<a href="static/ref_lib/full_library.html#FCSamplePreparation" target=\'_blank\' class=\'scb_s_select_technique_learn_more \' role=\'link\'>Learn more &gt;&gt;</a></div></td><td role=\'columnheader\' class=\'scb_s_facs_samples_table_heading sample_prep_cond_facs\'>Conditions</td><td role=\'columnheader\' class=\'scb_s_facs_samples_table_heading sample_prep_blank_facs\'>&nbsp;</td></thead>');
  var rList252 = opt_data.rows;
  var rListLen252 = rList252.length;
  for (var rIndex252 = 0; rIndex252 < rListLen252; rIndex252++) {
    var rData252 = rList252[rIndex252];
    output.append('<tr class=\'scb_s_facs_samples_table_tr ', (rData252.display_sample) ? ' scb_s_microscopy_row_border' : '', '\'  role=\'row\' ><td class=\'scb_s_facs_samples_table_td ', (rData252.display_sample) ? '' : 'scb_s_experiment_setup_table_border', ' \' style=\'width:56px;\'>', (rData252.display_sample) ? '<input  type="checkbox" class="scb_f_facs_sample_active" facs_id=\'' + soy.$$escapeHtml(opt_data.facs.id) + '\'  aria-checked=\'' + ((rData252.is_sample_enabled) ? 'true' : 'false') + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' cell_treatment_id=\'' + soy.$$escapeHtml(rData252.cell_treatment.id) + '\'  role=\'checkbox\'' + ((rData252.is_sample_enabled) ? 'checked="checked"' : '') + '>' : '', '</td> ', (rData252.kind == 'existing' && soy.$$getMapKeys(opt_data.kinds).length > 1) ? '' : '', '<td class=\'scb_s_facs_samples_table_td ', (rData252.display_sample) ? '' : 'scb_s_experiment_setup_table_border', '\' style="', (rData252.kind == 'existing' && soy.$$getMapKeys(opt_data.kinds).length > 1) ? 'width:230px;' : 'width:224px;', '">', (rData252.display_sample) ? soy.$$escapeHtml(rData252.display_text) : '', '</td><td class=\'scb_s_facs_samples_table_td ', (rData252.display_sample) ? '' : 'scb_s_experiment_setup_table_border', ' scb_s_facs_cell_treatment\' style="', (rData252.kind == 'existing' && soy.$$getMapKeys(opt_data.kinds).length > 1) ? 'width:171px;' : 'width:136px;', '">', (rData252.is_sample_enabled) ? ((rData252.has_fixed) ? '<span style=\'display:block; position:absolute;left:0px;top:0px\'><input type="radio" assignment_id="' + soy.$$escapeHtml(opt_data.assignment.id) + '" experiment_id = "' + soy.$$escapeHtml(opt_data.experiment.id) + '" facs_id = "' + soy.$$escapeHtml(opt_data.facs.id) + '" cell_treatment_id="' + soy.$$escapeHtml(rData252.cell_treatment.id) + '" name="CT_' + soy.$$escapeHtml(rData252.cell_treatment.id) + '_' + ((rData252.kind == 'existing') ? soy.$$escapeHtml(rData252.lane.id) : '') + '" value="fixed" ' + ((rData252.live) ? 'checked ' : '') + 'class=\'scb_f_facs_cell_treatment_radio scb_s_facs_cell_treatment_radio facs_locked\'><span class=\'scb_s_facs_cell_treatment_text ' + ((rData252.is_sample_enabled) ? 'facs_locked' : 'scb_s_microscopy_dim_conditions') + '\'>Fixed</span></input></span>' : '') + ((rData252.has_live) ? '<span style=\'display:block; position:absolute; left:60px;top:0px\'><input type="radio" assignment_id="' + soy.$$escapeHtml(opt_data.assignment.id) + '" experiment_id = "' + soy.$$escapeHtml(opt_data.experiment.id) + '" facs_id = "' + soy.$$escapeHtml(opt_data.facs.id) + '" cell_treatment_id="' + soy.$$escapeHtml(rData252.cell_treatment.id) + '" name="CT_' + soy.$$escapeHtml(rData252.cell_treatment.id) + '_' + ((rData252.kind == 'existing') ? soy.$$escapeHtml(rData252.lane.id) : '') + '" value="live" ' + ((! rData252.live) ? 'checked ' : '') + 'class=\'scb_f_facs_cell_treatment_radio scb_s_facs_cell_treatment_radio facs_locked\'><span class=\'scb_s_facs_cell_treatment_text ' + ((rData252.is_sample_enabled) ? 'facs_locked' : 'scb_s_microscopy_dim_conditions') + '\'>Live</span></input></span>' : '') : '', '</td><td class=\' scb_s_facs_samples_table_td ', (rData252.display_sample) ? '' : 'scb_s_experiment_setup_table_border', '\' style=\'width:215px;\'>');
    scb_facs.display_lysate_types({assignment: opt_data.assignment, experiment: opt_data.experiment, facs: opt_data.facs, cell_treatment: rData252.cell_treatment, kinds: opt_data.kinds, lane: rData252}, output);
    output.append('</td><td class=\' scb_s_facs_samples_table_td ', (rData252.display_sample) ? '' : 'scb_s_experiment_setup_table_border', '\' style=\'width:232px;\'>');
    if (rData252.lane && soy.$$getMapKeys(opt_data.kinds).length > 1) {
      if (opt_data.assignment.template.model.facs.is_ab) {
        var qList394 = soy.$$getMapKeys(opt_data.kinds[rData252.lane.kind].conditions);
        var qListLen394 = qList394.length;
        for (var qIndex394 = 0; qIndex394 < qListLen394; qIndex394++) {
          var qData394 = qList394[qIndex394];
          output.append((opt_data.assignment.template.facs_kinds[rData252.lane.kind].conditions[qData394].identity[rData252.cell_treatment.identifier]) ? '<input name="SQ_' + soy.$$escapeHtml(rData252.cell_treatment.id) + '_' + ((rData252.kind == 'existing') ? soy.$$escapeHtml(rData252.lane.id) : '') + '" class="scb_f_microscopy_select_conditions" facs_id=\'' + soy.$$escapeHtml(opt_data.facs.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' type="radio" value="$q" cell_treatment_id=\'' + soy.$$escapeHtml(rData252.cell_treatment.id) + '\' lane_kind="' + soy.$$escapeHtml(rData252.kind) + '" lane_id="' + ((rData252.kind == 'existing') ? soy.$$escapeHtml(rData252.lane.id) : '') + '"' + ((rData252.is_sample_enabled) ? 'checked="checked"' : '') + '/><span class="scb_s_western_blot_choose_gel_type_input_text ">' + soy.$$escapeHtml(opt_data.assignment.template.facs_kinds[rData252.lane.kind].conditions[qData394].name) + '</span>' : '');
        }
      } else {
        output.append((rData252.lane.kind == 'Dye') ? '<input class="scb_f_microscopy_select_conditions" facs_id=\'' + soy.$$escapeHtml(opt_data.facs.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' type="radio" value="whole" cell_treatment_id=\'' + soy.$$escapeHtml(rData252.cell_treatment.id) + '\' lane_kind="' + soy.$$escapeHtml(rData252.kind) + '" lane_id="' + ((rData252.kind == 'existing') ? soy.$$escapeHtml(rData252.lane.id) : '') + '"' + ((rData252.is_sample_enabled) ? 'checked="checked"' : '') + ' /><span class="scb_s_western_blot_choose_gel_type_input_text ">' + soy.$$escapeHtml(opt_data.assignment.template.facs_kinds.Dye.conditions.whole.name) + '</span>' : (rData252.lane.kind == 'Anti') ? '<input class="scb_f_microscopy_select_conditions" facs_id=\'' + soy.$$escapeHtml(opt_data.facs.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' type="radio" value="a" cell_treatment_id=\'' + soy.$$escapeHtml(rData252.cell_treatment.id) + '\' lane_kind="' + soy.$$escapeHtml(rData252.kind) + '" lane_id="' + ((rData252.kind == 'existing') ? soy.$$escapeHtml(rData252.lane.id) : '') + '"' + ((rData252.is_sample_enabled) ? 'checked="checked"' : '') + ' /><span class="scb_s_western_blot_choose_gel_type_input_text ">' + soy.$$escapeHtml(opt_data.assignment.template.facs_kinds.Anti.conditions.a.name) + '</span>' : '');
      }
    }
    output.append('</td><td class=\'scb_s_facs_samples_table_td ', (rData252.display_sample) ? '' : 'scb_s_experiment_setup_table_border', '\'>', (rData252.kind == 'existing' && soy.$$getMapKeys(opt_data.kinds).length > 1) ? '<button class="scb_f_facs_sample_remove" facs_id=\'' + soy.$$escapeHtml(opt_data.facs.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' lane_id=\'' + soy.$$escapeHtml(rData252.lane.id) + '\' role=\'button\' aria-label=\'Delete Sample\'' + ((rData252.is_sample_enabled) ? '' : 'disabled="disabled"') + '><img alt="Delete" title="Delete" src="images/setup/scb_remove.png"></button>' : '<!--<button class="scb_f_facs_sample_remove" role=\'button\' aria-label=\'Close Tab\' disabled="disabled">&#215;</button>-->', '</td></tr>');
  }
  output.append('<tr >', (opt_data.rows.length >= 10) ? '<tr class=\'scb_s_western_blot_samples_select_all_rel\' role=\'row\'><td colspan=\'2\' class=\'scb_f_facs_sample_active_all_td\' ><button class=\'scb_f_facs_sample_active_all\' role=\'button\' aria-label=\'Select All\'>SELECT ALL</button></td><td colspan=\'3\' align=\'right\' class=\'scb_f_facs_sample_inactive_all_td\' ><button class=\'scb_f_facs_sample_inactive_all\' role=\'button\' aria-label=\'Clear All\'>CLEAR ALL</button></td></tr>' : '<tr class=\'scb_s_facs_samples_select_all_abs\' role=\'row\'><td colspan=\'1\'><button class=\'scb_f_facs_sample_active_all\' role=\'button\' aria-label=\'Select All\'>SELECT ALL</button></td><td colspan=\'1\' class=\'scb_s_facs_blank_space1\' role=\'presentation\'></td><td colspan=\'1\' >&nbsp;</td><td colspan=\'1\'><button class=\'scb_f_facs_sample_inactive_all\' role=\'button\' aria-label=\'Clear All\'>CLEAR ALL</button></td><td colspan=\'1\' >&nbsp;</td></tr>', '</tr></table></div>', (opt_data.rows.length >= 10) ? '<div class="scb_s_western_blot_green_line" role=\'presentation\'></div>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


scb_facs.display_facs_progress = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_facs_progress\'><div class=\'scb_s_facs_vertical_line_1\' role=\'presentation\'></div><div class=\'scb_s_facs_vertical_line_4\' role=\'presentation\'></div><div class=\'scb_s_facs_vertical_line_7\' role=\'presentation\'></div><div class=\'scb_s_western_blot_progress_bar\'><div class = \'scb_s_western_blot_progress_gray_bar\' role=\'progressbar\'><div class=\'scb_s_facs_vertical_line_1_top\' role=\'presentation\'></div><div class=\'scb_s_facs_vertical_line_4_top\' role=\'presentation\'></div><div class=\'scb_s_facs_vertical_line_7_top\' role=\'presentation\'></div><div class=\'scb_s_western_blot_progress_stripe_bar\' style=\'width:', (opt_data.step == 1) ? '20px;' : '', (opt_data.step == 2) ? ' 289px;' : '', (opt_data.step == 3) ? '607px; border-top-right-radius:8px; border-bottom-right-radius:8px;' : '', '\' aria-label=\'', (opt_data.step == 1) ? 'Sample Prep' : '', (opt_data.step == 2) ? 'Run' : '', (opt_data.step == 3) ? 'Analyze' : '', '\' ></div></div><div class=\'scb_s_facs_progress_rest\' role=\'presentation\'><div class=\'scb_s_western_blot_progress_item scb_facs_progress_1\'>1. Sample Prep</div><div class=\'scb_s_western_blot_progress_item scb_facs_progress_2\'>2. Run</div><div class=\'scb_s_western_blot_progress_item scb_facs_progress_3\'>3. Analyze</div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


scb_facs.display_lysate_types = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (soy.$$getMapKeys(opt_data.kinds).length == 1) {
    var kList533 = soy.$$getMapKeys(opt_data.kinds);
    var kListLen533 = kList533.length;
    for (var kIndex533 = 0; kIndex533 < kListLen533; kIndex533++) {
      var kData533 = kList533[kIndex533];
      output.append('<span class="scb_f_facs_select_lysate_type ', (opt_data.lane.is_valid) ? '' : 'scb_s_microscopy_dim_conditions', '" cell_treatment_id=\'', soy.$$escapeHtml(opt_data.cell_treatment.id), '\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\' assignment_id="', soy.$$escapeHtml(opt_data.assignment.id), '" experiment_id="', soy.$$escapeHtml(opt_data.experiment.id), '" value="', soy.$$escapeHtml(kData533), '" lane_kind="', soy.$$escapeHtml(opt_data.lane.kind), '" lane_id="', (opt_data.lane.kind == 'existing') ? soy.$$escapeHtml(opt_data.lane.lane.id) : '', '">', soy.$$escapeHtml(opt_data.kinds[kData533].name), '</span>');
    }
  } else {
    output.append('<select class="scb_f_facs_select_lysate_type ', (opt_data.lane.is_sample_enabled) ? '' : 'scb_s_microscopy_dim_conditions', '" cell_treatment_id=\'', soy.$$escapeHtml(opt_data.cell_treatment.id), '\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\' assignment_id="', soy.$$escapeHtml(opt_data.assignment.id), '" experiment_id="', soy.$$escapeHtml(opt_data.experiment.id), '" lane_kind="', soy.$$escapeHtml(opt_data.lane.kind), '" lane_id="', (opt_data.lane.kind == 'existing') ? soy.$$escapeHtml(opt_data.lane.lane.id) : '', '" role=\'select\'', (opt_data.lane.is_sample_enabled) ? '' : 'disabled="disabled"', '>');
    if (opt_data.assignment.template.model.facs.is_ab) {
      if (opt_data.lane.kind == 'existing') {
        var kList589 = soy.$$getMapKeys(opt_data.kinds);
        var kListLen589 = kList589.length;
        for (var kIndex589 = 0; kIndex589 < kListLen589; kIndex589++) {
          var kData589 = kList589[kIndex589];
          output.append((opt_data.lane.has_live && opt_data.kinds[kData589]['Live'][opt_data.cell_treatment.id]) ? '<option value=\'' + soy.$$escapeHtml(kData589) + '\' role=\'option\'' + ((opt_data.lane.lane.kind == kData589) ? 'selected="selected"' : '') + '>' + soy.$$escapeHtml(opt_data.kinds[kData589].name) + '</option>' : '', (opt_data.lane.has_fixed && opt_data.kinds[kData589]['Fixed'][opt_data.cell_treatment.id]) ? '<option value=\'' + soy.$$escapeHtml(kData589) + '\' role=\'option\'' + ((opt_data.lane.lane.kind == kData589) ? 'selected="selected"' : '') + '>' + soy.$$escapeHtml(opt_data.kinds[kData589].name) + '</option>' : '');
        }
      } else {
        output.append((soy.$$getMapKeys(opt_data.kinds).length != 1) ? '<option selected="selected" disabled="disabled" role=\'option\' value=\'\'>Select Analysis</option>' : '');
        var kList617 = soy.$$getMapKeys(opt_data.kinds);
        var kListLen617 = kList617.length;
        for (var kIndex617 = 0; kIndex617 < kListLen617; kIndex617++) {
          var kData617 = kList617[kIndex617];
          output.append('<option role=\'option\' value=\'', soy.$$escapeHtml(kData617), '\'>', soy.$$escapeHtml(opt_data.kinds[kData617].name), '</option>');
        }
      }
    } else {
      if (opt_data.lane.kind == 'existing') {
        var kList627 = soy.$$getMapKeys(opt_data.kinds);
        var kListLen627 = kList627.length;
        for (var kIndex627 = 0; kIndex627 < kListLen627; kIndex627++) {
          var kData627 = kList627[kIndex627];
          output.append('<option value=\'', soy.$$escapeHtml(kData627), '\' role=\'option\'', (opt_data.lane.lane.kind == kData627) ? 'selected="selected"' : '', '>', soy.$$escapeHtml(opt_data.kinds[kData627].name), '</option>');
        }
      } else {
        output.append((soy.$$getMapKeys(opt_data.kinds).length != 1) ? '<option selected="selected" disabled="disabled" role=\'option\' value=\'\'>Select Analysis</option>' : '');
        var kList642 = soy.$$getMapKeys(opt_data.kinds);
        var kListLen642 = kList642.length;
        for (var kIndex642 = 0; kIndex642 < kListLen642; kIndex642++) {
          var kData642 = kList642[kIndex642];
          output.append('<option role=\'option\' value=\'', soy.$$escapeHtml(kData642), '\'>', soy.$$escapeHtml(opt_data.kinds[kData642].name), '</option>');
        }
      }
    }
    output.append('</select>');
  }
  return opt_sb ? '' : output.toString();
};


scb_facs.analyze = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_facs_tab_content_analyze\'  role=\'tabpanel\'>');
  if (opt_data.facs.samples_finished) {
    scb_facs.display_facs_progress({step: 3}, output);
  } else {
    scb_facs.display_facs_progress({step: 2}, output);
  }
  output.append('<div class=\'scb_s_facs_samples_area\'><div class=\'scb_s_facs_samples_heading\' role=\'heading\'>Samples</div>', (opt_data.facs.samples_finished) ? '<button class=\'scb_f_facs_tools_toggle scb_s_facs_tools_samples_followup_toggle\'  role=\'button\' aria-label=\'Samples Info\' note=\'scb_s_facs_tools_samples_followup\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' facs_id=\'' + soy.$$escapeHtml(opt_data.facs.id) + '\'></button>' : '', '<div class=\'scb_s_facs_tools_samples_followup ', (opt_data.facs.samples_show_state) ? '' : 'scb_s_hidden_note', '\' role=\'note\' ><button class=\'scb_f_facs_note_close_button scb_s_samples_close\' aria-label=\'Close\' role=\'button\' note=\'scb_s_facs_tools_samples_followup\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\'><span>&#215;</span></button>To display the flow cytometry data for a sample, select the sample name from the list below.</div><div class=\'', (opt_data.facs.samples_finished) ? 'scb_s_facs_choose_samples_order ' : 'scb_s_facs_choose_samples_order_border', '\'><ol role=\'list\'  class=\'scb_s_facs_choose_samples_order_list\'>');
  var rList687 = opt_data.rows;
  var rListLen687 = rList687.length;
  for (var rIndex687 = 0; rIndex687 < rListLen687; rIndex687++) {
    var rData687 = rList687[rIndex687];
    output.append((rData687.is_valid) ? (rData687.index == 0) ? '<li role=\'listitem\' facs_id=\'' + soy.$$escapeHtml(opt_data.facs.id) + '\' assignment_id="' + soy.$$escapeHtml(opt_data.assignment.id) + '" experiment_id="' + soy.$$escapeHtml(opt_data.experiment.id) + '" facs_lane_id=\'' + soy.$$escapeHtml(rData687.lane.id) + '\' lane_kind = \'' + soy.$$escapeHtml(rData687.lane.kind) + '\' conditions = \'' + soy.$$escapeHtml(rData687.lane.conditions) + '\' title=\'' + soy.$$escapeHtml(rData687.display_text) + '\'' + ((opt_data.facs.selected_lane && rData687.cell_treatment.id == opt_data.facs.selected_lane.cell_treatment_id) ? 'class=\'scb_s_facs_sample_selected\'' : '') + '>&nbsp;&nbsp;' + soy.$$escapeHtml(rData687.display_text) + '</li>' : '' : '');
  }
  output.append('</ol></div>', (opt_data.facs.samples_finished) ? '' : '<button class=\'' + ((opt_data.rows_valid > 9) ? 'scb_f_facs_run_samples' : 'scb_f_facs_run_samples_short') + '  scb_s_navigation_button\' facs_id=\'' + soy.$$escapeHtml(opt_data.facs.id) + '\' assignment_id="' + soy.$$escapeHtml(opt_data.assignment.id) + '" role=\'button\' experiment_id="' + soy.$$escapeHtml(opt_data.experiment.id) + '">RUN SAMPLES</button>', '</div><div class=\'scb_s_facs_samples_graph_area ', (opt_data.facs.samples_finished) ? '' : 'scb_s_facs_dim', '\'><div class=\'scb_s_western_blot_gel_tabs\' role=\'tablist\'>');
  if (opt_data.facs.samples_finished) {
    var rList739 = opt_data.rows;
    var rListLen739 = rList739.length;
    for (var rIndex739 = 0; rIndex739 < rListLen739; rIndex739++) {
      var rData739 = rList739[rIndex739];
      output.append((rData739.is_valid && rData739.lane.id == opt_data.facs.selected_lane.id) ? '<span class=\'scb_s_western_blot_gel_active scb_s_western_blot_gel_tab \' role=\'tab\'><div class=\'scb_s_facs_gel_tab_selected\'>' + soy.$$escapeHtml(opt_data.facs.selected_lane.kinds[opt_data.facs.selected_lane.kind].conditions[opt_data.facs.selected_lane.conditions].name) + '</div></span>' : (rData739.is_valid && rData739.cell_treatment.id == opt_data.facs.selected_lane.cell_treatment_id) ? '<div class=\'scb_s_western_blot_gel_tab\' facs_id=\'' + soy.$$escapeHtml(opt_data.facs.id) + '\' assignment_id=\'' + soy.$$escapeHtml(opt_data.assignment.id) + '\' role=\'tab\' experiment_id=\'' + soy.$$escapeHtml(opt_data.experiment.id) + '\' facs_lane_id=\'' + soy.$$escapeHtml(rData739.lane.id) + '\'>' + soy.$$escapeHtml(rData739.lane.kinds[rData739.lane.kind].conditions[rData739.lane.conditions].name) + '</div>' : '');
    }
  } else {
    output.append('<span class=\'scb_s_western_blot_gel_active scb_s_western_blot_gel_tab\'  role=\'tab\'><div class=\'scb_s_facs_gel_tab_selected\'>PI</div></span>');
  }
  output.append('</div>');
  scb_facs.display_graph({assignment: opt_data.assignment, experiment: opt_data.experiment, facs: opt_data.facs, facs_line_id: opt_data.facs.lane_selected, lane: opt_data.facs.selected_lane}, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


scb_facs.display_graph = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'scb_s_western_blot_gel_content\'><div class=\'scb_s_facs_chart_wrapper\'><div class=\'scb_s_facs_chart_xaxis\'>', (opt_data.lane && opt_data.lane.kinds[opt_data.lane.kind].conditions) ? soy.$$escapeHtml(opt_data.lane.kinds[opt_data.lane.kind].conditions[opt_data.lane.conditions].name) : 'PI', ' Fluorescence</div><div class=\'scb_s_facs_chart_yaxis\'>Number of cells (thousands)</div><div class=\'scb_s_facs_chart_helper\'></div><div class=\'scb_s_facs_chart_guider\'></div><div class=\'scb_s_facs_chart\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\'', (opt_data.facs_line_id) ? 'facs_lane_id=\'' + soy.$$escapeHtml(opt_data.facs_line_id) + '\'' : '', '></div></div><div class=\'scb_s_facs_tools_instructions_followup ', (opt_data.facs.instructions_show_state) ? '' : 'scb_s_hidden_note', '\' role=\'note\'><button class=\'scb_f_facs_note_close_button scb_s_instructions_close\' aria-label=\'Close\' role=\'button\' note=\'scb_s_facs_tools_instructions_followup\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\'><span>&#215;</span></button>To draw a single gate, click <img src="images/header/scb_histogram_icon.png">. Click and drag your cursor within the graph. The % of cells within the gate will be calculated.<br/>To divide the entire population into two subpopulations, click <img src="images/header/scb_bisector_icon.png">. Click at the desired bisecting point on the graph. The % of cells within subpopulation each will be calculated. Check <b>Apply to All</b> to apply the analysis parameters to all samples.</div><button class=\'scb_f_info_icon scb_s_facs_histogram_info ', (opt_data.facs.samples_finished) ? '' : 'scb_s_facs_dim', '\' note=\'scb_f_facs_histogram_followup\' role=\'button\' aria-label=\'Histogram Info\'> </button><div class=\'scb_f_facs_histogram_followup scb_f_controls_note\' role=\'note\'><!--<button class=\'scb_f_controls_close_button\' aria-label=\'Close\'>&#215;</button>-->The histogram displays the number of cells (Y-axis) for each particular fluorescent emission level of Propidium Iodide (PI) (X-axis) of each cell within the sample. &nbsp;<a href="static/ref_lib/full_library.html#FCAnalyze" target=\'_blank\' class=\'scb_s_select_technique_learn_more \' role=\'link\'>Learn more &gt;&gt;</a></div><div class=\'scb_s_facs_tools\'>');
  if (opt_data.facs.show_analysis) {
    output.append('<h1>Analysis Tools</h1><button class=\'scb_f_facs_tools_toggle scb_s_facs_tools_instructions_followup_toggle\' role=\'button\' aria-label=\'Analysis Tools Info\' note=\'scb_s_facs_tools_instructions_followup\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\'> </button><input class=\'scb_s_facs_single_range_button\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' aria-checked=\'', (opt_data.facs.sample_analysis) ? 'true' : 'false', '\' title="Single gate" facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\' id="scb_facs_check" type=\'checkbox\' ', (opt_data.facs.sample_analysis) ? 'checked' : '', ' ><label class="scb_s_facs_label" for="scb_facs_check"><img src="images/header/scb_histogram_icon.png"></label> </input><input class=\'scb_s_facs_double_range_button\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' aria-checked=\'', (opt_data.facs.double_analysis) ? 'true' : 'false', '\' title="Bisector gate" facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\' id="scb_facs_check2" type=\'checkbox\' ', (opt_data.facs.double_analysis) ? 'checked' : '', ' ><label class="scb_s_facs_label" for="scb_facs_check2"><img src="images/header/scb_bisector_icon.png"></label> </input>');
    if (opt_data.lane.canvas_metadata_analysis) {
      if (opt_data.lane.canvas_metadata_analysis.ranges) {
        if (opt_data.lane.canvas_metadata_analysis.ranges.length > 0) {
          output.append('<table class=\'scb_s_facs_tools_analyze_data\' role=\'grid\'><thead><tr><td role=\'columnheader\'></td><td role=\'columnheader\'></td><td role=\'columnheader\'>', (opt_data.lane && opt_data.lane.kinds[opt_data.lane.kind].conditions) ? soy.$$escapeHtml(opt_data.lane.kinds[opt_data.lane.kind].conditions[opt_data.lane.conditions].name) : 'PI', ' Fluorescence</td><td role=\'columnheader\'>% Cells</td><td role=\'columnheader\'></td></tr></thead><tbody>');
          var rangeList858 = opt_data.lane.canvas_metadata_analysis.ranges;
          var rangeListLen858 = rangeList858.length;
          for (var rangeIndex858 = 0; rangeIndex858 < rangeListLen858; rangeIndex858++) {
            var rangeData858 = rangeList858[rangeIndex858];
            output.append('<tr role=\'row\'><td class="', (rangeData858.bisector_id == 'b') ? 'scb_s_facs_tools_analyze_bisector_border' : '', '">', soy.$$escapeHtml(rangeData858.display_id), '</td><td class="', (rangeData858.bisector_id == 'b') ? 'scb_s_facs_tools_analyze_bisector_border' : '', '">', soy.$$escapeHtml(rangeData858.bisector_id), '</td><td class="', (rangeData858.bisector_id == 'b') ? 'scb_s_facs_tools_analyze_bisector_border' : '', '">', soy.$$escapeHtml(rangeData858.from), ' - ', soy.$$escapeHtml(rangeData858.to), '</td><td class="', (rangeData858.bisector_id == 'b') ? 'scb_s_facs_tools_analyze_bisector_border' : '', '">', soy.$$escapeHtml(rangeData858.percentage), '</td><td class="', (rangeData858.bisector_id == 'b') ? 'scb_s_facs_tools_analyze_bisector_border' : '', '"><img class=\'scb_f_facs_analyze_remove_point scb_s_facs_analyze_remove_point\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\' facs_lane_id=\'', soy.$$escapeHtml(opt_data.lane.id), '\' from=\'', soy.$$escapeHtml(rangeData858.from), '\' to=\'', soy.$$escapeHtml(rangeData858.to), '\' alt="Delete" title="Delete" src="images/setup/scb_remove.png"></td></tr>');
          }
          output.append('</tbody></table><span class=\'scb_s_facs_apply\'><input type="checkbox" assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' role=\'checkbox\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' aria-checked=\'', (opt_data.facs.apply_dna_analysis_to_all) ? 'true' : 'false', '\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\' facs_lane_id=\'', soy.$$escapeHtml(opt_data.lane.id), '\' class=\'scb_f_facs_apply_to_all\'', (opt_data.facs.apply_dna_analysis_to_all) ? 'checked=\'checked\'' : '', '> Apply to all</span>');
        }
      }
    }
  } else {
    output.append('<div class=\'scb_s_facs_tools_instructions_initial\'><!-- To view the flow cytometry data for each sample, select the sample name in the Samples window to the left. --></div><button class=\'scb_f_facs_tools_start_analysis scb_s_navigation_button ', (opt_data.facs.samples_finished) ? '' : 'scb_s_facs_dim', '\' assignment_id=\'', soy.$$escapeHtml(opt_data.assignment.id), '\' experiment_id=\'', soy.$$escapeHtml(opt_data.experiment.id), '\' role=\'button\' facs_id=\'', soy.$$escapeHtml(opt_data.facs.id), '\'>ANALYZE DATA</button>');
  }
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};
