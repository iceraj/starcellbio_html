microEntity = $('<div />').html('&#181;').text();

var __assignment2 = {
    id:'assignment_2',
    name:'7.02 StarCellBio Prototype Assignment',
    description:'Biochemical approach to analyzing vulva development in <i>C. elegans.</i>',
    experiments:{},
    template:{
        instructions:'Your new lab is studying vulva development in <i>C. elegans</i>. You screen a chemical library and identify four new drugs, which all affect vulva development, and you name them Vulvarine 1, 2, 3 and 4.<br><br>Increasing amounts of Vulvarines 1 and 2 result in a vulvaless phenotype in the wild-type worms whereas treatment of wild-type worms with Vulvarines 3 and 4 results in a multivulva phenotype. Your advisor tells you that some proteins involved in the vulva development pathway are already known and she advises you to do western blots to test if some of these proteins are affected by these treatments.<br><br>i) Use the StarCellBio software to analyze the western blots from worms treated with increasing doses of Vulvarines. Choose the gene products whose expression you would like to check. <br>ii) Which proteins are affected by Vulvarine treatment? What is the critical Vulvarine concentration for each treatment?<br> iii) Look up the biological function of each protein whose expression is affected by the drug and speculate as to how the change in its levels may have a role in vulva development.<br>',
        add_new_row_instructions:'On this page, set up your experiment to treat the wild-type worms with the four new drugs, Vulvarines 1-4, identified in your chemical screen. <ul><li>To get started, click <b>Add Treatment Protocol.</b></li><li>For each treatment protocol, select the <i>C. elegans</i> strain, treatment(s), and treatment dose.</li><li> For all of your treatments, treat the <i>C. elegans</i> immediately (time = 0 minutes) and collect after 3 days.</li><li>Once you finish setting up your experiment, select <b>Finish setup & run experiment.</b> After you run your experiment, you will be unable to change your treatment protocols.</li></ul>',
        ui_configuration:{
            experiment_steps_setup:true, // this is not even checked...
            experiment_steps_western_blot:true,
            experiment_steps_facs:false,
            experiment_steps_microscopy:false,
            treatment_options_display_temperature:false,
            treatment_options_edit_schedule:false,
            lysate_display_ip:false,
            amount_of_protein_loaded:50,
            experiment_setup_duration:3600, // seconds
            experiment_setup_resolution_height:3600,
            experiment_setup_physical_height:600,
            collection_times_fixed:true,
            maximum_number_of_treatments_per_protocol:1,
            show_add_new_experiment_rows:true
        },
        drug_template:{
            name:'Buffer only',
            drug_id:'nc',
            concentration_id:0
        },
        experiment_templates:{
            'default':{
                collection_schedule_list:{
                    list:[
                        {
                            schedule:"3 d",
                            schedule_value:3600 * 24 * 3,
                            id:'3 d'
                        }
                    ]
                },
                treatment:{
                    schedule_value:0,
                    schedule:'immediately',
                    duration_value:3600 * 24 * 3,
                    duration:'3 d'
                }
            },
            'treatment_protocol_template':{
                'P1':{
                    title:'Basic protocol',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', duration_value:3600 * 24 * 3, duration:'3 d', drug_list:{list:[
                            {drug_id:'nc', concentration_id:0}
                        ]}}
                    ]},
                    collection_schedule_list:{
                        list:[
                            {
                                schedule:"3 d",
                                schedule_value:3600 * 24 * 3,
                                id:'3 d'
                            }
                        ]
                    }
                }
            }
        },
        name:'7.02 StarCellBio Prototype Assignment',
        concentrations:{
            1:{
                name:'1 ' + microEntity + 'M',
                value:1000
            },
            5:{
                name:'5 ' + microEntity + 'M',
                value:5000
            },
            10:{
                name:'10 ' + microEntity + 'M',
                value:10000
            },
            20:{
                name:'20 ' + microEntity + 'M',
                value:20000
            },
            25:{
                name:'25 ' + microEntity + 'M',
                value:25000
            },
            40:{
                name:'40 ' + microEntity + 'M',
                value:40000
            },
            80:{
                name:'80 ' + microEntity + 'M',
                value:80000
            },
            125:{
                name:'125 ' + microEntity + 'M',
                value:125000
            },
            '10n':{
                name:'10 nM',
                value:10
            },
            50:{
                name:'50 nM',
                value:50
            },
            100:{
                name:'100 nM',
                value:100
            },
            200:{
                name:'200 nM',
                value:200
            },
            400:{
                name:'400 nM',
                value:400
            },
            0:{
                name:'0 nM',
                value:0
            }
        },
        drugs:{
            'nc':{
                name:'Buffer only',
                concentrations:[0]
            },
            1:{
                name:'Vulvarine 1',
                concentrations:[5, 10, 20, 40, 80]
            },
            2:{
                name:'Vulvarine 2',
                concentrations:[50, 100, 200, 400]
            },
            3:{
                name:'Vulvarine 3',
                concentrations:[1, 5, 25, 125]
            },
            4:{
                name:'Vulvarine 4',
                concentrations:['10n', 50, 100, 200, 400]
            }
        },
        experiment_temperatures:{
            '25':{
                name:"25'C"
            }
        },
        cell_lines:{
            'wt':{
                name:'Wild Type'
            }

        },
        time_unit:{
            kind:'minutes'
        },
        primary_anti_body:{
            1:{
                name:'rabbit anti-let-23',
                secondary:[1],
                marks:[
                    {weight:24, intensity:.11},
                    {weight:36, intensity:.4},
                    {weight:48, intensity:.04}
                ]
            },
            2:{
                name:'mouse anti-let-60',
                secondary:[3],
                marks:[
                    {weight:48, intensity:.04}
                ]
            },
            3:{
                name:'goat anti-lin15A',
                secondary:[2],
                marks:[
                    {weight:12, intensity:.02}
                ]
            },
            9:{
                name:'goat anti-lin15B',
                secondary:[2],
                marks:[
                    {weight:100, intensity:.01},
                    {weight:129, intensity:.11}
                ]
            },
            4:{
                name:'goat anti-lin-1',
                secondary:[2]
            },
            5:{
                name:'mouse anti-Dpy-5',
                secondary:[3]
            },
            6:{
                name:'rabbit anti-Lon-2',
                secondary:[1]
            },
            7:{
                name:'mouse anti-Sma-4',
                secondary:[3]
            },
            8:{
                name:'goat anti-Unc-22',
                secondary:[2]
            }
        },
        secondary_anti_body:{
            1:{
                name:'donkey anti-rabbit'
            },
            2:{
                name:'rabbit anti-goat'
            },
            3:{
                name:'goat anti-mouse'
            }
        },
        lysate_kinds:{
            'whole':{
                name:'Whole Cell'
            },
            'cyto':{
                name:'Cytoplasm'
            },
            'nuclear':{
                name:'Nuclear'
            }
        },
        model:{// model
            western_blot:{// this applies to western blot
                'cyto':{// it acts on cytoplasm (thus on whole cell lysate as well)
                    'parser_fixed':[
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':1, // Vul 1
                            'cutoff':10000,
                            'above_marks':[
                                {
                                    name:'let-23',
                                    weight:150,
                                    intensity:-40,
                                    primary_anti_body:[1]
                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':2, // Vul 2
                            'cutoff':200,
                            'above_marks':[
                                {
                                    name:'let-60',
                                    weight:21,
                                    intensity:-100,
                                    primary_anti_body:[2]
                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':3, // Vul 3
                            'cutoff':25000,
                            'above_marks':[
                                {
                                    name:'let-15A',
                                    weight:79,
                                    intensity:-100,
                                    primary_anti_body:[3]
                                },
                                {
                                    name:'let-15B',
                                    weight:163,
                                    intensity:-100,
                                    primary_anti_body:[9]

                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':4, // Vul 3
                            'cutoff':400,
                            'above_marks':[
                                {
                                    name:'let-1',
                                    weight:48,
                                    intensity:-100,
                                    primary_anti_body:[4]
                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'static',
                            'marks':[
                                {
                                    name:'let-23',
                                    weight:150,
                                    intensity:40,
                                    primary_anti_body:[1]
                                },
                                {
                                    name:'let-60',
                                    weight:21,
                                    intensity:100,
                                    primary_anti_body:[2]
                                },
                                {
                                    name:'let-15A',
                                    weight:79,
                                    intensity:100,
                                    primary_anti_body:[3]
                                },
                                {
                                    name:'let-15B',
                                    weight:163,
                                    intensity:100,
                                    primary_anti_body:[9]
                                },
                                {
                                    name:'let-1',
                                    weight:48,
                                    intensity:100,
                                    primary_anti_body:[4]
                                },
                                {
                                    name:'Dpy-5',
                                    weight:20,
                                    intensity:60,
                                    primary_anti_body:[5]
                                },
                                {
                                    name:'Lan-2',
                                    weight:100,
                                    intensity:40,
                                    primary_anti_body:[6]
                                },
                                {
                                    name:'Sma-4',
                                    weight:75,
                                    intensity:25,
                                    primary_anti_body:[7]
                                },
                                {
                                    name:'Unc-22',
                                    weight:40,
                                    intensity:10,
                                    primary_anti_body:[8]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
};

var __assigment_tufts = {
    id:'assignment_tufts',
    name:'Assignment for TUFTS',
    description:'TUFTS prototype assignment.',
    experiments:{
    },
    template:{
        ui_configuration:{
            experiment_steps_setup:true, // this is not even checked...
            experiment_steps_western_blot:true,
            experiment_steps_facs:false,
            experiment_steps_microscopy:false,
            treatment_options_display_temperature:false,
            lysate_display_ip:false,
            amount_of_protein_loaded:50,
            experiment_setup_duration:3600, // seconds
            experiment_setup_resolution_height:3600,
            experiment_setup_physical_height:600,
            treatment_options_edit_schedule:false,
            maximum_number_of_treatments_per_protocol:0,
            collection_times_fixed:true,
            treatments_options_edit:false,
            display_collection_times:false,
            display_stimulation_times:true,
            experiment_setup_edit_cell_line:false
        },
        drug_template:{
            name:'Serum Starvation',
            drug_id:1,
            concentration_id:0
        },
        experiment_templates:{
            'default':{
                collection_schedule_list:{list:[
                    {schedule:"10 min", schedule_value:600, id:'10'}
                ]}
            },
            'treatment_protocol_template':{
                'P1':{
                    title:'Serum starvation alone',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'0 min', duration_value:3600 * 18, duration:'18h', drug_list:{list:[
                            {drug_id:1, concentration_id:0}
                        ]}}
                    ]},
                    collection_schedule_list:{list:[
                        {schedule:"18h", schedule_value:3600 * 18, id:'3'}
                    ]},
                    stimulation_time:'0 minutes'
                },
                'P2':{
                    title:'Serum starvation + agonist treatment',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'0 min', duration_value:3600 * 18, duration:'18h', drug_list:{list:[
                            {drug_id:1, concentration_id:0}
                        ]}},
                        {schedule_value:3600 * 18, schedule:'18h', duration_value:600, duration:'10 min', drug_list:{list:[
                            {drug_id:2, concentration_id:1}
                        ]}}
                    ]},
                    collection_schedule_list:{list:[
                        {schedule:"3h 10 min", schedule_value:3600 * 18 + 600, id:'31'}
                    ]},
                    stimulation_time:'10 minutes'
                },
                'P3':{
                    title:'Serum starvation + EGFR inhibitor + agonist',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'0 min', duration_value:3600 * 18, duration:'18h', drug_list:{list:[
                            {drug_id:1, concentration_id:0}
                        ]}},
                        {schedule_value:3600 * 18, schedule:'18h', duration_value:900, duration:'15 min', drug_list:{list:[
                            {drug_id:3, concentration_id:20}
                        ]}},
                        {schedule_value:3600 * 18 + 15 * 60, schedule:'18h 15min', duration_value:600, duration:'10 min', drug_list:{list:[
                            {drug_id:2, concentration_id:1}
                        ]}}
                    ]},
                    collection_schedule_list:{list:[
                        {schedule:"18h 25 min", schedule_value:3600 * 18 + 25 * 60, id:'325'}
                    ]},
                    stimulation_time:'10 minutes'
                },
                'P4':{
                    title:'Serum starvation + MEK inhibitor + agonist',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'0 min', duration_value:3600 * 18, duration:'18h', drug_list:{list:[
                            {drug_id:1, concentration_id:0}
                        ]}},
                        {schedule_value:3600 * 18, schedule:'18h', duration_value:900, duration:'15 min', drug_list:{list:[
                            {drug_id:4, concentration_id:10}
                        ]}},
                        {schedule_value:3600 * 18 + 15 * 60, schedule:'18h 15min', duration_value:600, duration:'10 min', drug_list:{list:[
                            {drug_id:2, concentration_id:1}
                        ]}}
                    ]},
                    collection_schedule_list:{list:[
                        {schedule:"18h 25 min", schedule_value:3600 * 18 + 25 * 60, id:'325'}
                    ]},
                    stimulation_time:'10 minutes'
                },
                'P5':{
                    title:'Serum starvation + EGFR inhibitor & MEK inhibitor + agonist',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'0 min', duration_value:3600 * 18, duration:'18h', drug_list:{list:[
                            {drug_id:1, concentration_id:0}
                        ]}},
                        {schedule_value:3600 * 18, schedule:'18h', duration_value:900, duration:'15 min', drug_list:{list:[
                            {drug_id:3, concentration_id:20},
                            {drug_id:4, concentration_id:10}
                        ]}},
                        {schedule_value:3600 * 18 + 15 * 60, schedule:'18h 15min', duration_value:600, duration:'10 min', drug_list:{list:[
                            {drug_id:2, concentration_id:1}
                        ]}}
                    ]},
                    collection_schedule_list:{list:[
                        {schedule:"18h 25 min", schedule_value:3600 * 18 + 25 * 60, id:'325'}
                    ]},
                    stimulation_time:'10 minutes'
                }
            }
        },
        name:'TUFTS CellBio Prototype Assignment',
        concentrations:{
            0:{
                name:'0.1%',
                value:0
            },
            1:{
                name:'100ng/mL',
                value:100
            },
            20:{
                name:'20uM',
                value:20
            },
            10:{
                name:'10uM',
                value:10
            }

        },
        drugs:{
            1:{name:'FBS',
                concentrations:[0]
            },
            2:{
                name:'EGF',
                concentrations:[1]
            },
            3:{
                name:'Erlotinib',
                concentrations:[20]
            },
            4:{
                name:'U0126',
                concentrations:[10]
            }
        },
        experiment_temperatures:{
            '25':{ name:"25'C"    }
        },
        cell_lines:{
            'wt':{
                name:'Wild Type'
            }
        },
        time_unit:{
            kind:'minutes'
        },
        primary_anti_body:{
            1:{
                name:'rabbit anti P-ERK1/2',
                secondary:[1],
                marks:[
                    {weight:44, intensity:0},
                    {weight:42, intensity:0}
                ]
            },
            2:{
                name:'rabbit anti ERK1/2',
                secondary:[1],
                marks:[
                    {weight:44, intensity:1},
                    {weight:42, intensity:1}
                ]
            },
            3:{
                name:'rabbit P-EGFR',
                secondary:[1],
                marks:[
                    {weight:175, intensity:0}
                ]
            },
            4:{
                name:'rabbit EGFR',
                secondary:[1],
                marks:[
                    {weight:134, intensity:1}
                ]
            },
            5:{
                name:'rabbit anti tubulin',
                secondary:[1],
                marks:[
                    {weight:50, intensity:1}
                ]
            }
        },
        secondary_anti_body:{
            1:{
                name:'goat anti-rabbit'
            }
        },
        lysate_kinds:{
            'whole':{
                name:'Whole Cell'
            }
        },
        facs_preparation:{
            'live':{
                dye1:{ name:'dye1', kind:'dye'},
                dye2:{ name:'dye2', kind:'dye'},
                ab1:{ name:'ab1', kind:'anti-body', 'secondary':{sab1:{name:'sab1'}, sab2:{name:'sab2'}} }
            },
            'fixed':{
                dye1:{ name:'dye3', kind:'dye'},
                dye2:{ name:'dye4', kind:'dye'},
                ab1:{ name:'ab5', kind:'anti-body', 'secondary':{sab1:{name:'sab6'}, sab2:{name:'sab7'}} }
            }
        },
        model:{ // model
            western_blot:{ // this applies to western blot
                'cyto':{ // it acts on cytoplasm (thus on whole cell lysate as well)
                    'parser_fixed':[
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':2, // FBS
                            'cutoff':50,
                            'above_marks':[
                                {
                                    name:'P-ERK',
                                    weight:44,
                                    intensity:1,
                                    primary_anti_body:[1]
                                },
                                {
                                    name:'P-ERK',
                                    weight:42,
                                    intensity:1,
                                    primary_anti_body:[1]
                                },
                                {
                                    name:'P-EGFR',
                                    weight:175,
                                    intensity:1,
                                    primary_anti_body:[3]
                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':3, // Erlotinib
                            'cutoff':10,
                            'above_marks':[
                                {
                                    name:'P-ERK',
                                    weight:44,
                                    intensity:-1,
                                    primary_anti_body:[1]
                                },
                                {
                                    name:'P-ERK',
                                    weight:42,
                                    intensity:-1,
                                    primary_anti_body:[1]
                                },
                                {
                                    name:'P-EGFR',
                                    weight:175,
                                    intensity:-1,
                                    primary_anti_body:[3]
                                }
                            ]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':4, // U0126
                            'cutoff':10,
                            'above_marks':[
                                {
                                    name:'P-ERK',
                                    weight:44,
                                    intensity:-1,
                                    primary_anti_body:[1]
                                },
                                {
                                    name:'P-ERK',
                                    weight:42,
                                    intensity:-1,
                                    primary_anti_body:[1]
                                },
                                {
                                    name:'P-EGFR',
                                    weight:175,
                                    intensity:0,
                                    primary_anti_body:[3]
                                }
                            ],
                            'below_marks':[]
                        }
                    ]
                }
            }
        }
    }
};

var __assigment_facs = {
    id:'assignment_3',
    name:'FACS prototype',
    description:'FACS prototype assignment.',
    experiments:{
    },
    template:{
        ui_configuration:{
            experiment_steps_setup:true, // this is not even checked...
            experiment_steps_western_blot:false,
            experiment_steps_facs:true,
            experiment_steps_microscopy:false,
            treatment_options_display_temperature:false,
            lysate_display_ip:false,
            amount_of_protein_loaded:50,
            experiment_setup_duration:3600, // seconds
            experiment_setup_resolution_height:3600,
            experiment_setup_physical_height:600,
            facs_cell_cycle_length:24 * 3600, //24h cell cycle
            facs_cell_cycle_step:300 // 5 minutes
        },
        drug_template:{
            name:'Negative Control',
            drug_id:'nc',
            concentration_id:0
        },
        experiment_templates:{
            'default':{
                collection_schedule_list:{list:[
                    {schedule:"10 min", schedule_value:600, id:'10'},
                    {schedule:"30 min", schedule_value:1800, id:'30'},
                    {schedule:"60 min", schedule_value:3600, id:'60'}
                ]}
            },
            treatment_protocol_template:{
                'default':{
                    collection_schedule_list:{list:[
                        {schedule:"10 min", schedule_value:600, id:'10'},
                        {schedule:"30 min", schedule_value:1800, id:'30'},
                        {schedule:"60 min", schedule_value:3600, id:'60'}
                    ]}
                }
            }
        },
        name:'TUFTS CellBio Prototype Assignment',
        concentrations:{
            1:{
                name:'1ug/ml',
                value:1
            },
            0:{
                name:'0ug/ml',
                value:0
            }
        },
        drugs:{
            1:{
                name:'Nocodazole', // G2 prometaphase drug
                concentrations:[1]
            },
            'nc':{
                name:'Negative Control',
                concentrations:[0]
            }
        },
        experiment_temperatures:{
            '25':{ name:"25'C"    }
        },
        cell_lines:{
            'strain 1':{
                name:'Strain 1'
            }
        },
        time_unit:{
            kind:'minutes'
        },
        primary_anti_body:{
            1:{
                name:'rabbit anti-goat beta-actin',
                secondary:[2],
                marks:[
                    {weight:100, intensity:.01},
                    {weight:129, intensity:.11}
                ]
            },
            2:{
                name:'mouse anti-mouse phosphotyrosine',
                secondary:[3],
                marks:[
                    {weight:120, intensity:.01},
                    {weight:129, intensity:.11}
                ]
            },
            3:{
                name:'mouse anti-mouse cdk2',
                secondary:[3],
                marks:[
                    {weight:140, intensity:.01},
                    {weight:129, intensity:.11}
                ]
            }
        },
        secondary_anti_body:{
            1:{
                name:'donkey anti-rabbit'
            },
            2:{
                name:'rabbit anti-goat'
            },
            3:{
                name:'goat anti-mouse'
            }
        },
        lysate_kinds:{
            'whole':{
                name:'Whole Cell'
            },
            'cyto':{
                name:'Cytoplasm'
            },
            'nuclear':{
                name:'Nuclear'
            }
        },
        model:{ // model
            facs:{
                'dna':{
                    'parser_1':[
                        {
                            'cell_line':'strain 1',
                            'drug':1,
                            'action':'block_cycle'
                        }
                    ]
                }
            },
            western_blot:{ // this applies to western blot
                'cyto':{ // it acts on cytoplasm (thus on whole cell lysate as well)
                    'parser_1':[
                        // simple models as documented
                        {
                            'cell_line':'strain 1', // as defined in cell_lines
                            'drug':1, // these are required preconditions
                            'transfer_function':'linear_concentration_duration_with_max', // this is transfer function
                            'marks':[
                                // these are the marks that will appear
                                {
                                    weight:50,
                                    intensity_slope:-0.01,
                                    intensity_intercept:300,
                                    intensity_max:1000,
                                    intensity_min:5
                                },
                                {
                                    weight:75,
                                    intensity_slope:0.02,
                                    intensity_intercept:.3,
                                    intensity_max:1000,
                                    intensity_min:5
                                },
                                {
                                    weight:35,
                                    intensity_slope:0.001,
                                    intensity_intercept:4,
                                    intensity_max:1000,
                                    intensity_min:5
                                }
                            ]
                        }
                    ],
                    'parser_fixed':[
                        {'cell_line':'wt',
                            'transfer_function':'static', // this is transfer function
                            'marks':[
                                // these are the marks that will appear
                                {
                                    weight:60,
                                    intensity:300
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
};

var __basic_tests = {
    id:'basic_tests',
    name:'SCB Basic Tests',
    description:'Biochemical approach to analyzing vulva development in <i>C. elegans.</i>',
    experiments:{},
    template:{
        instructions:'$DISPLAY_ASSIGNMENT_INSTRUCTIONS$',

        ui:{
            experiment_setup:{table:[
                {kind:"cell_line",
                    title:"Strain",
                    editable:false
                },
                {kind:"treatments",
                    children:[
                        {kind:"drug", title:"Treatments", editable:false},
                        {kind:"concentration", title:"Concentration", editable:false},
                        {kind:"start", title:"Start", editable:false},
                        {kind:"duration", title:"Duration", editable:false}
                    ]
                },
                {kind:"custom",
                    title:"Stimulation Time",
                    editable:false,
                    key:"stimulation_time"},
                {kind:"actions",
                    title:"Actions"
                }
            ], actions:[
                {kind:"add_protocol", title:"Add Treatment Protocol"}
            ]}
        },

        experiment_setup_actions:{
            cell_lines:[
                {
                    id:'wt',
                    title:'Wild Type',
                    cell_line:'wt'
                },
                {
                    id:'m1',
                    title:'Mutant 1',
                    cell_line:'m1'
                }
            ],
            treatment_protocol_list:[
                {
                    id:'P1',
                    title:'Buffer Only',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', // start
                            duration_value:3600 * 24 * 3, duration:'3 d', // end
                            drug_list:{list:[
                                {drug_id:'nc', concentration_id:0}
                            ]}}
                    ]}
                },
                {
                    id:'P2',
                    title:'V1 low conc',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', // start
                            duration_value:3600 * 24 * 3, duration:'3 d', // end
                            drug_list:{list:[
                                {drug_id:'nc', concentration_id:'0'},
                                {drug_id:'1', concentration_id:'1'}
                            ]}}
                    ]}
                },
                {
                    id:'P3',
                    title:'V1 high conc',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', // start
                            duration_value:3600 * 24 * 3, duration:'3 d', // end
                            drug_list:{list:[
                                {drug_id:'nc', concentration_id:'0'},
                                {drug_id:'1', concentration_id:'125'}
                            ]}}
                    ]}
                },
                {
                    id:'P4',
                    title:'V2 low conc',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', // start
                            duration_value:3600 * 24 * 3, duration:'3 d', // end
                            drug_list:{list:[
                                {drug_id:'nc', concentration_id:'0'},
                                {drug_id:'1', concentration_id:'50'}
                            ]}}
                    ]}
                },
                {
                    id:'P5',
                    title:'Many drugs',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', // start
                            duration_value:3600 * 24 * 3, duration:'3 d', // end
                            drug_list:{list:[
                                {drug_id:'nc', concentration_id:'0'},
                                {drug_id:'1', concentration_id:'0'},
                                {drug_id:'2', concentration_id:'5'},
                                {drug_id:'3', concentration_id:'10'}
                            ]}}
                    ]}
                },
                {
                    id:'P6',
                    title:'Many drugs, Many times',
                    treatment_list:{
                        list:[
                            {schedule_value:0, schedule:'immediately', // start
                                duration_value:3600 * 24 * 3, duration:'3 d', // end
                                drug_list:{list:[
                                    {drug_id:'nc', concentration_id:'0'},
                                    {drug_id:'1', concentration_id:'0'},
                                    {drug_id:'2', concentration_id:'5'},
                                    {drug_id:'3', concentration_id:'10'}
                                ]}}
                        ]}
                }
            ],
            collection_schedule_list:[
                {id:'3 d', title:'3 days'}
            ]
        },

        add_new_row_instructions:'On this page, set up your experiment to treat the wild-type worms with the four new drugs, Vulvarines 1-4, identified in your chemical screen. <ul><li>To get started, click <b>Add Treatment Protocol.</b></li><li>For each treatment protocol, select the <i>C. elegans</i> strain, treatment(s), and treatment dose.</li><li> For all of your treatments, treat the <i>C. elegans</i> immediately (time = 0 minutes) and collect after 3 days.</li><li>Once you finish setting up your experiment, select <b>Finish setup & run experiment.</b> After you run your experiment, you will be unable to change your treatment protocols.</li></ul>',

        concentrations:{
            '1':{
                name:'1 ' + microEntity + 'M',
                value:1000
            },
            '5':{
                name:'5 ' + microEntity + 'M',
                value:5000
            },
            '10':{
                name:'10 ' + microEntity + 'M',
                value:10000
            },
            '20':{
                name:'20 ' + microEntity + 'M',
                value:20000
            },
            '25':{
                name:'25 ' + microEntity + 'M',
                value:25000
            },
            '40':{
                name:'40 ' + microEntity + 'M',
                value:40000
            },
            '80':{
                name:'80 ' + microEntity + 'M',
                value:80000
            },
            '125':{
                name:'125 ' + microEntity + 'M',
                value:125000
            },
            '10n':{
                name:'10 nM',
                value:10
            },
            '50':{
                name:'50 nM',
                value:50
            },
            '100':{
                name:'100 nM',
                value:100
            },
            '200':{
                name:'200 nM',
                value:200
            },
            '400':{
                name:'400 nM',
                value:400
            },
            '0':{
                name:'0 nM',
                value:0
            }
        },
        drugs:{
            'nc':{
                name:'Buffer only',
                concentrations:[0]
            },
            '1':{
                name:'Vulvarine 1',
                concentrations:[5, 10, 20, 40, 80]
            },
            '2':{
                name:'Vulvarine 2',
                concentrations:[50, 100, 200, 400]
            },
            '3':{
                name:'Vulvarine 3',
                concentrations:[1, 5, 25, 125]
            },
            '4':{
                name:'Vulvarine 4',
                concentrations:['10n', 50, 100, 200, 400]
            }
        },
        experiment_temperatures:{
            '25':{
                name:"25'C"
            }
        },
        cell_lines:{
            'wt':{
                name:'Wild Type'
            },
            'm1':{
                name:'Mutant 1'
            }

        },
        time_unit:{
            kind:'minutes'
        },
        primary_anti_body:{
            1:{
                name:'rabbit anti-let-23',
                secondary:[1],
                marks:[
                    {weight:24, intensity:.11},
                    {weight:36, intensity:.4},
                    {weight:48, intensity:.04}
                ]
            },
            2:{
                name:'mouse anti-let-60',
                secondary:[3],
                marks:[
                    {weight:48, intensity:.04}
                ]
            },
            3:{
                name:'goat anti-lin15A',
                secondary:[2],
                marks:[
                    {weight:12, intensity:.02}
                ]
            },
            9:{
                name:'goat anti-lin15B',
                secondary:[2],
                marks:[
                    {weight:100, intensity:.01},
                    {weight:129, intensity:.11}
                ]
            },
            4:{
                name:'goat anti-lin-1',
                secondary:[2]
            },
            5:{
                name:'mouse anti-Dpy-5',
                secondary:[3]
            },
            6:{
                name:'rabbit anti-Lon-2',
                secondary:[1]
            },
            7:{
                name:'mouse anti-Sma-4',
                secondary:[3]
            },
            8:{
                name:'goat anti-Unc-22',
                secondary:[2]
            }
        },
        secondary_anti_body:{
            1:{
                name:'donkey anti-rabbit'
            },
            2:{
                name:'rabbit anti-goat'
            },
            3:{
                name:'goat anti-mouse'
            }
        },
        lysate_kinds:{
            'whole':{
                name:'Whole Cell'
            },
            'cyto':{
                name:'Cytoplasm'
            },
            'nuclear':{
                name:'Nuclear'
            }
        },
        model:{// model
            western_blot:{// this applies to western blot
                'cyto':{// it acts on cytoplasm (thus on whole cell lysate as well)
                    'parser_fixed':[
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':1, // Vul 1
                            'cutoff':10000,
                            'above_marks':[
                                {
                                    name:'let-23',
                                    weight:150,
                                    intensity:-40,
                                    primary_anti_body:[1]
                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':2, // Vul 2
                            'cutoff':200,
                            'above_marks':[
                                {
                                    name:'let-60',
                                    weight:21,
                                    intensity:-100,
                                    primary_anti_body:[2]
                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':3, // Vul 3
                            'cutoff':25000,
                            'above_marks':[
                                {
                                    name:'let-15A',
                                    weight:79,
                                    intensity:-100,
                                    primary_anti_body:[3]
                                },
                                {
                                    name:'let-15B',
                                    weight:163,
                                    intensity:-100,
                                    primary_anti_body:[9]

                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':4, // Vul 3
                            'cutoff':400,
                            'above_marks':[
                                {
                                    name:'let-1',
                                    weight:48,
                                    intensity:-100,
                                    primary_anti_body:[4]
                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'static',
                            'marks':[
                                {
                                    name:'let-23',
                                    weight:150,
                                    intensity:40,
                                    primary_anti_body:[1]
                                },
                                {
                                    name:'let-60',
                                    weight:21,
                                    intensity:100,
                                    primary_anti_body:[2]
                                },
                                {
                                    name:'let-15A',
                                    weight:79,
                                    intensity:100,
                                    primary_anti_body:[3]
                                },
                                {
                                    name:'let-15B',
                                    weight:163,
                                    intensity:100,
                                    primary_anti_body:[9]
                                },
                                {
                                    name:'let-1',
                                    weight:48,
                                    intensity:100,
                                    primary_anti_body:[4]
                                },
                                {
                                    name:'Dpy-5',
                                    weight:20,
                                    intensity:60,
                                    primary_anti_body:[5]
                                },
                                {
                                    name:'Lan-2',
                                    weight:100,
                                    intensity:40,
                                    primary_anti_body:[6]
                                },
                                {
                                    name:'Sma-4',
                                    weight:75,
                                    intensity:25,
                                    primary_anti_body:[7]
                                },
                                {
                                    name:'Unc-22',
                                    weight:40,
                                    intensity:10,
                                    primary_anti_body:[8]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
}


var __usability_test = {
    id:'usability_test',
    name:'SCB Usability Test',
    description:'Biochemical approach to analyzing vulva development in <i>C. elegans.</i>',
    experiments:{},
    template:{
        instructions:'',

        ui:{
            experimental_design:{
              techniques:[ 'wb' ]
            },
            experiment_setup:{table:[
                {kind:"cell_plate",
                    title:" ",
                    editable:false},
                {kind:"cell_line",
                    title:"Strain",
                    editable:false
                },
                {kind:"treatments",
                    children:[
                        {kind:"drug", title:"Treatments", editable:true},
                        {kind:"concentration", title:"Concentration", editable:true},
                        {kind:"start", title:"Start", editable:false},
                        {kind:"duration", title:"Duration", editable:false}
                    ]
                },{kind:"actions",
                    title:"Actions"
                }
            ], actions:[
                //{kind:"add_protocol", title:"Add Treatment Protocol"}
            ], new_row:{
                title:'New row',
                cell_line: 'wt',
                treatment_list:{list:[
                {schedule_value:0, duration_value:3600*24*3, duration:'3 d', drug_list:{list:[
                    {drug_id:'nc', concentration_id:'0'}
                    ]}
                }
                ]},
                collection_schedule_list:{list:[
                    {schedule:"18h", schedule_value:18 * 3600, id:'3'}
                ]}
            }
            },
            western_blot:{format:"%CELL_LINE% %TREATMENT% %CONCENTRATION%",
                keys:{
                    '%CELL_LINE%':{attr:['cell_line'],map:['cell_lines','%KEY%','name']},
                    '%TREATMENT%':{attr:['treatment_list','list','0','drug_list','list','0','drug_id'],map:['drugs','%KEY%','name']},
                    '%CONCENTRATION%':{attr:['treatment_list','list','0','drug_list','list','0','concentration_id'],map:['concentrations','%KEY%','name']}
                }
            },
        },

        experiment_setup_actions:{
            cell_lines:[
                {
                    id:'wt',
                    title:'Wild Type',
                    cell_line:'wt'
                }
            ],
            treatment_protocol_list:[
                {
                    id:'P1',
                    title:'Buffer Only',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', // start
                            duration_value:3600 * 24 * 3, duration:'3 d', // end
                            drug_list:{list:[
                                {drug_id:'nc', concentration_id:0}
                            ]}}
                    ]}
                },
                {
                    id:'P2',
                    title:'V1 low conc',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', // start
                            duration_value:3600 * 24 * 3, duration:'3 d', // end
                            drug_list:{list:[
                                {drug_id:'nc', concentration_id:'0'},
                                {drug_id:'1', concentration_id:'1'}
                            ]}}
                    ]}
                },
                {
                    id:'P3',
                    title:'V1 high conc',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', // start
                            duration_value:3600 * 24 * 3, duration:'3 d', // end
                            drug_list:{list:[
                                {drug_id:'nc', concentration_id:'0'},
                                {drug_id:'1', concentration_id:'125'}
                            ]}}
                    ]}
                },
                {
                    id:'P4',
                    title:'V2 low conc',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', // start
                            duration_value:3600 * 24 * 3, duration:'3 d', // end
                            drug_list:{list:[
                                {drug_id:'nc', concentration_id:'0'},
                                {drug_id:'1', concentration_id:'50'}
                            ]}}
                    ]}
                },
                {
                    id:'P5',
                    title:'Many drugs',
                    treatment_list:{list:[
                        {schedule_value:0, schedule:'immediately', // start
                            duration_value:3600 * 24 * 3, duration:'3 d', // end
                            drug_list:{list:[
                                {drug_id:'nc', concentration_id:'0'},
                                {drug_id:'1', concentration_id:'0'},
                                {drug_id:'2', concentration_id:'5'},
                                {drug_id:'3', concentration_id:'10'}
                            ]}}
                    ]}
                },
                {
                    id:'P6',
                    title:'Many drugs, Many times',
                    treatment_list:{
                        list:[
                            {schedule_value:0, schedule:'immediately', // start
                                duration_value:3600 * 24 * 3, duration:'3 d', // end
                                drug_list:{list:[
                                    {drug_id:'nc', concentration_id:'0'},
                                    {drug_id:'1', concentration_id:'0'},
                                    {drug_id:'2', concentration_id:'5'},
                                    {drug_id:'3', concentration_id:'10'}
                                ]}}
                        ]}
                }
            ],
            collection_schedule_list:[
                {id:'3 d', title:'3 days'}
            ]
        },

        add_new_row_instructions:'On this page, set up your experiment to treat the wild-type worms with the four new drugs, Vulvarines 1-4, identified in your chemical screen. <ul><li>To get started, click <b>Add Treatment Protocol.</b></li><li>For each treatment protocol, select the <i>C. elegans</i> strain, treatment(s), and treatment dose.</li><li> For all of your treatments, treat the <i>C. elegans</i> immediately (time = 0 minutes) and collect after 3 days.</li><li>Once you finish setting up your experiment, select <b>Finish setup & run experiment.</b> After you run your experiment, you will be unable to change your treatment protocols.</li></ul>',

        concentrations:{
            '1':{
                name:'1 ' + microEntity + 'M',
                value:1000
            },
            '5':{
                name:'5 ' + microEntity + 'M',
                value:5000
            },
            '10':{
                name:'10 ' + microEntity + 'M',
                value:10000
            },
            '20':{
                name:'20 ' + microEntity + 'M',
                value:20000
            },
            '25':{
                name:'25 ' + microEntity + 'M',
                value:25000
            },
            '40':{
                name:'40 ' + microEntity + 'M',
                value:40000
            },
            '80':{
                name:'80 ' + microEntity + 'M',
                value:80000
            },
            '125':{
                name:'125 ' + microEntity + 'M',
                value:125000
            },
            '10n':{
                name:'10 nM',
                value:10
            },
            '50':{
                name:'50 nM',
                value:50
            },
            '100':{
                name:'100 nM',
                value:100
            },
            '200':{
                name:'200 nM',
                value:200
            },
            '400':{
                name:'400 nM',
                value:400
            },
            '0':{
                name:'0 nM',
                value:0
            }
        },
        drugs:{
            'nc':{
                name:'Buffer only',
                concentrations:[0]
            },
            '1':{
                name:'Vulvarine 1',
                concentrations:[5, 10, 20, 40, 80]
            },
            '2':{
                name:'Vulvarine 2',
                concentrations:[50, 100, 200, 400]
            },
            '3':{
                name:'Vulvarine 3',
                concentrations:[1, 5, 25, 125]
            },
            '4':{
                name:'Vulvarine 4',
                concentrations:['10n', 50, 100, 200, 400]
            }
        },
        experiment_temperatures:{
            '25':{
                name:"25'C"
            }
        },
        cell_lines:{
            'wt':{
                name:'Wild Type'
            }
        },
        time_unit:{
            kind:'minutes'
        },
        primary_anti_body:{
            1:{
                name:'rabbit anti-let-23',
                secondary:[1],
                marks:[
                    {weight:24, intensity:.11},
                    {weight:36, intensity:.4},
                    {weight:48, intensity:.04}
                ],
                gel_name:'let-23'
            },
            2:{
                name:'mouse anti-let-60',
                secondary:[3],
                marks:[
                    {weight:48, intensity:.04}
                ],
                gel_name: 'let-60'
            },
            3:{
                name:'goat anti-lin15A',
                secondary:[2],
                marks:[
                    {weight:12, intensity:.02}
                ],
                gel_name:'lin15A'
            },
            9:{
                name:'goat anti-lin15B',
                secondary:[2],
                marks:[
                    {weight:100, intensity:.01},
                    {weight:129, intensity:.11}
                ],
                gel_name:'lin15B'
            },
            4:{
                name:'goat anti-lin-1',
                secondary:[2],
                gel_name:'lin-1'
            },
            5:{
                name:'mouse anti-Dpy-5',
                secondary:[3],
                gel_name:'Dpy-5'
            },
            6:{
                name:'rabbit anti-Lon-2',
                secondary:[1],
                gel_name:'Lon-2'
            },
            7:{
                name:'mouse anti-Sma-4',
                secondary:[3],
                gel_name:'Sma-4'
            },
            8:{
                name:'goat anti-Unc-22',
                secondary:[2],
                gel_name:'Unc-22'
            },
            9:{
                name:'rabbit anti-tubulin',
                secondary:[1],
                gel_name:'anti-tubulin',
                marks:[
                    {weight:50, intensity:25.1}
                ]
            }
        },
        secondary_anti_body:{
            1:{
                name:'donkey anti-rabbit'
            },
            2:{
                name:'rabbit anti-goat'
            },
            3:{
                name:'goat anti-mouse'
            }
        },
        lysate_kinds:{
            'whole':{
                name:'Whole Cell'
            },/*
            'cyto':{
                name:'Cytoplasm'
            },
            'nuclear':{
                name:'Nuclear'
            }*/
        },
        model:{// model
            western_blot:{// this applies to western blot
                'cyto':{// it acts on cytoplasm (thus on whole cell lysate as well)
                    'parser_fixed':[
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':1, // Vul 1
                            'cutoff':10000,
                            'above_marks':[
                                {
                                    name:'let-23',
                                    weight:150,
                                    intensity:-40,
                                    primary_anti_body:[1]
                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':2, // Vul 2
                            'cutoff':200,
                            'above_marks':[
                                {
                                    name:'let-60',
                                    weight:21,
                                    intensity:-100,
                                    primary_anti_body:[2]
                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':3, // Vul 3
                            'cutoff':25000,
                            'above_marks':[
                                {
                                    name:'let-15A',
                                    weight:79,
                                    intensity:-100,
                                    primary_anti_body:[3]
                                },
                                {
                                    name:'let-15B',
                                    weight:163,
                                    intensity:-100,
                                    primary_anti_body:[9]

                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'delta',
                            'drug':4, // Vul 3
                            'cutoff':400,
                            'above_marks':[
                                {
                                    name:'let-1',
                                    weight:48,
                                    intensity:-100,
                                    primary_anti_body:[4]
                                }
                            ],
                            'below_marks':[]
                        },
                        {
                            'cell_line':'wt',
                            'transfer_function':'static',
                            'marks':[
                                {
                                    name:'let-23',
                                    weight:150,
                                    intensity:40,
                                    primary_anti_body:[1]
                                },
                                {
                                    name:'let-60',
                                    weight:21,
                                    intensity:100,
                                    primary_anti_body:[2]
                                },
                                {
                                    name:'let-15A',
                                    weight:79,
                                    intensity:100,
                                    primary_anti_body:[3]
                                },
                                {
                                    name:'let-15B',
                                    weight:163,
                                    intensity:100,
                                    primary_anti_body:[9]
                                },
                                {
                                    name:'let-1',
                                    weight:48,
                                    intensity:100,
                                    primary_anti_body:[4]
                                },
                                {
                                    name:'Dpy-5',
                                    weight:20,
                                    intensity:60,
                                    primary_anti_body:[5]
                                },
                                {
                                    name:'Lan-2',
                                    weight:100,
                                    intensity:40,
                                    primary_anti_body:[6]
                                },
                                {
                                    name:'Sma-4',
                                    weight:75,
                                    intensity:25,
                                    primary_anti_body:[7]
                                },
                                {
                                    name:'Unc-22',
                                    weight:40,
                                    intensity:10,
                                    primary_anti_body:[8]
                                }
                            ]
                        }
                    ]
                }
            }
        }
    }
}



master_model_data = {
    app_title:'StarCellBio',
    app_description:'StarCellBio Placeholder',
    //'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.',
    assignments:{
        list:[/*__assigment_tufts, __assigment_facs, __assignment2,*/ __usability_test,__basic_tests
        ]
    },
    ui:{}
};