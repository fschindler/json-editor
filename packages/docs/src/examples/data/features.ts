export const data = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ita multo sanguine profuso in laetitia et in victoria est mortuus. Graccho, eius fere, aequalí? Illum mallem levares, quo optimum atque humanissimum virum, Cn. Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui. Duo Reges: constructio interrete. Sed mehercule pergrata mihi oratio tua. Omnis enim est natura diligens sui. Illa argumenta propria videamus, cur omnia sint paria peccata. Atque his de rebus et splendida est eorum et illustris oratio.',
    switch: [
        {
            type: 'header',
            text: 'my header'
        },
        {
            type: 'paragraph',
            text: 'Lorem ipsum sit dolor'
        }
    ],
    dependency: {}
    // @todo additionalProperties = false => should add error to additional property and add delete option
    // @todo additionalProperties = true => results in wron schema (root) for property
    // @todo no add.Props => returns error instead of schema. should be derived schema?
    // unknownProperty: 123,
    // unknownList: [{ title: 'super unknown' }],
};

export const schema = {
    type: 'object',
    title: 'Widgets Overview',
    description: 'this is the root object',
    options: {
        editJson: { enabled: true, liveUpdate: true }
    },
    required: [
        'string',
        'stringPlaceholder',
        'stringReadonly',
        'stringDisabled',
        'text',
        'number',
        'numberIcons',
        'boolean',
        'isInteractive',
        'file',
        'const',
        'imageFile',
        'readOnlyFile',
        'typeSelection',
        'anyOf',
        'nullField',
        'remoteNestedEnum',
        'list',
        'switch',
        'dependency',
        'ifthenelse',
        'ifthen',
        'html'
    ],
    properties: {
        string: {
            title: 'Required string input',
            type: 'string',
            description:
                'set an input field as required by adding it to the "required" list of properties and add a "minLength: 1" validation',
            minLength: 1
        },
        stringPlaceholder: {
            title: 'Text input with placeholder',
            type: 'string',
            options: {
                icon: 'user',
                iconPosition: 'left',
                placeholder: 'your last name'
            },
            description: 'text inputs can have a placeholder and icon'
        },
        stringReadonly: {
            options: {
                readOnly: true
            },
            title: 'Text input set to readonly',
            type: 'string',
            default: 'value that can be selected'
        },
        stringDisabled: {
            options: {
                disabled: true
            },
            title: 'Disabled text input',
            type: 'string',
            default: 'some value that cannot be interacted with'
        },
        // stringLabel: {
        //     title: 'Text with semantic ui label',
        //     type: 'string',
        //     options: {
        //         label: { content: 'kg' },
        //         labelPosition: 'left corner'
        //     },
        //     description: 'text inputs can have a placeholder and icon'
        // },
        text: {
            options: {
                disabled: false
            },
            type: 'string',
            format: 'textarea',
            description: 'textarea for multiline contents',
            minLength: 1
        },
        number: {
            type: 'number',
            options: {
                required: true
            },
            default: 2019,
            maximum: 2020,
            description: 'number input with maximum 2020'
        },
        numberIcons: {
            type: 'number',
            options: {
                icon: 'birthday',
                placeholder: 'your last name'
            },
            defaultValue: null,
            description: 'also numbers can have icons'
        },
        boolean: {
            title: 'True if should be interactive',
            description: 'default boolean checkbox',
            type: 'boolean',
            default: true
        },
        isInteractive: {
            title: 'True if should be interactive',
            description: 'boolean with options: { type: "checkbox"}',
            type: 'boolean',
            options: {
                type: 'checkbox'
            },
            default: true
        },
        selection: {
            title: 'Enum selection with custom titles',
            type: 'string',
            enum: ['dark', 'light'],
            defaultValue: 'dark theme',
            options: {
                enum: ['Zeige dunkel an', 'Zeige hell an']
            }
        },
        const: {
            // @todo without string we received an unknown node - should be string
            type: 'string',
            title: 'const value',
            const: 'schema form tree',
            description: 'probably to be disabled when correct (or autocorrect)'
        },
        file: {
            title: 'file selection',
            description: 'file selection with preview of selected value',
            type: ['string', 'object'],
            format: 'file',
            minLength: 1
        },
        imageFile: {
            title: 'image file selection',
            description: 'file selection can have valid types restricted, e.g. to images',
            options: {
                accept: 'image/*'
            },
            type: ['string', 'object'],
            format: 'file'
        },
        readOnlyFile: {
            title: 'image set to readonly',
            description: 'file selection can have an imageUrlTemplate to render images',
            options: {
                accept: 'image/*',
                readOnly: true,
                imageUrlTemplate:
                    'https://images.unsplash.com/{{value}}?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60'
            },
            type: ['string', 'object'],
            format: 'file',
            default: 'photo-1666694421187-75957423ee77'
        },
        typeSelection: {
            type: 'object',
            oneOfProperty: 'type',
            description: 'description only for object typeSelection',
            oneOf: [
                {
                    type: 'object',
                    title: 'first option',
                    required: ['type', 'title'],
                    properties: {
                        type: { type: 'string', const: 'first' },
                        title: { type: 'string', title: 'header 1' }
                    }
                },
                {
                    type: 'object',
                    title: 'second option',
                    required: ['type', 'title'],
                    properties: {
                        type: { type: 'string', const: 'second' },
                        title: { type: 'string', title: 'header 2' }
                    }
                }
            ]
        },
        anyOf: {
            title: 'any of simple value',
            description:
                'This example uses card layout and editJson options. @todo any of is not yet supported in user interface.',
            type: 'object',
            options: {
                classNames: ['my-custom-class'],
                editJson: { enabled: true, liveUpdate: true },
                layout: {
                    type: 'card'
                }
            },
            properties: {
                staticProperty: {
                    title: 'static property',
                    type: 'string'
                }
            },
            anyOf: [
                {
                    properties: {
                        firstProperty: {
                            title: 'first dynamic property',
                            type: 'string'
                        }
                    }
                },
                {
                    properties: {
                        secondProperty: {
                            title: 'second dynamic property',
                            type: 'string'
                        }
                    }
                }
            ]
        },
        nullField: {
            type: 'null',
            title: 'Field of type "null"',
            description: 'from rjsf - use for extra information'
        },
        remoteNestedEnum: {
            title: 'remote enum in array',
            type: 'array',
            options: {
                syncEnum: {
                    source: '#/list'
                }
            },
            items: {
                type: 'string',
                enum: ['everyone', 'system', 'it_administrator_internal']
            },
            uniqueItems: true
        },
        list: {
            title: 'List of strings',
            description: 'Array with string items only. At least one item is required.',
            type: 'array',
            items: {
                type: 'string'
            },
            minItems: 1,
            default: ['first item']
        },
        switch: {
            type: 'array',
            title: 'Array with item selection',
            description: 'Array with items.oneOf statement and activated drag&drop support.',
            minItems: 1,
            options: {
                sortable: { enabled: true },
                editJson: { enabled: true, liveUpdate: true }
            },
            default: [
                {
                    type: 'header',
                    text: 'my header'
                }
            ],
            items: {
                oneOf: [
                    {
                        id: 'header',
                        title: 'header',
                        type: 'object',
                        required: ['type', 'text'],
                        properties: {
                            type: {
                                type: 'string',
                                const: 'header',
                                options: {
                                    hidden: true
                                }
                            },
                            text: { type: 'string' }
                        }
                    },
                    {
                        id: 'paragraph',
                        title: 'paragraph',
                        type: 'object',
                        required: ['type', 'text'],
                        properties: {
                            type: {
                                type: 'string',
                                const: 'paragraph',
                                options: {
                                    hidden: true
                                }
                            },
                            text: { type: 'string' }
                        }
                    }
                ]
            }
        },
        dependency: {
            options: {
                layout: {
                    type: 'card'
                }
            },
            title: 'dependency',
            description:
                'support for schema dependencies, where an additional schema is activated if a given input has a value',
            type: 'object',
            required: ['firstname'],
            properties: {
                firstname: {
                    title: 'first name',
                    description: 'if a name is given, last name will be active',
                    type: 'string'
                }
            },
            dependencies: {
                firstname: {
                    required: ['lastname'],
                    properties: {
                        lastname: {
                            title: 'last name',
                            type: 'string',
                            minLength: 1
                        }
                    }
                }
            }
        },
        ifthenelse: {
            title: 'if-then-else',
            description: 'switch schema based on schema validation. ',
            type: 'object',
            options: {
                header: {
                    color: 'blue'
                }
            },
            required: ['toggle'],
            properties: {
                toggle: {
                    title: 'Toggle for conditional schema',
                    description: 'if this content contains more than five characters another schema will be used',
                    type: 'string',
                    default: '123456'
                }
            },
            if: {
                required: ['toggle'],
                properties: {
                    toggle: {
                        type: 'string',
                        maxLength: 5
                    }
                }
            },
            then: {
                required: ['toggleOn'],
                properties: {
                    toggleOn: {
                        title: 'toggle off',
                        description: 'the toggle has less than 5 characters',
                        type: 'string'
                    }
                }
            },
            else: {
                required: ['toggleOff'],
                properties: {
                    toggleOff: {
                        title: 'toggle on',
                        description: 'the toggle has more than 5 characters',
                        type: 'string',
                        enum: ['select 1', 'select 2', 'select 3']
                    }
                }
            }
        },
        ifthen: {
            title: 'if-then',
            description: 'switch schema based on schema validation. ',
            type: 'object',
            options: {
                header: {
                    inverted: false,
                    color: 'blue'
                }
            },
            required: ['toggle'],
            properties: {
                toggle: {
                    title: 'Toggle for conditional schema',
                    description: 'if this content contains more than five characters an additional schema will be used',
                    type: 'string'
                }
            },
            if: {
                required: ['toggle'],
                properties: {
                    toggle: {
                        type: 'string',
                        minLength: 6
                    }
                }
            },
            then: {
                required: ['toggleOff'],
                properties: {
                    toggleOff: {
                        title: 'dynamic schema',
                        description: 'the toggle has more than 5 characters',
                        type: 'string',
                        enum: ['select 1', 'select 2', 'select 3']
                    }
                }
            }
        },
        html: {
            title: 'this could be an input field for html',
            type: 'string',
            format: 'html',
            description: 'textarea for multiline contents',
            minLength: 1
        }
    }
};
