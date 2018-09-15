module.exports = [
    { 
        "type": "heading", 
        "defaultValue": "Rest settings" ,
        "size": 3
    }, 
    { 
        "type": "section",
        "items": [
            {
                "type": "heading",
                "defaultValue": "Timers"
            },
            {
                "type": "slider",
                "label": "Up button",
                "description": "Time in seconds",
                "messageKey": "up",
                "defaultValue": 120,
                "min": 1,
                "max": 255,
                "step": 1
            },
            {
                "type": "slider",
                "label": "Select button",
                "description": "Time in seconds",
                "messageKey": "select",
                "defaultValue": 90,
                "min": 1,
                "max": 255,
                "step": 1
            },
            {
                "type": "slider",
                "label": "Down button",
                "description": "Time in seconds",
                "messageKey": "down",
                "defaultValue": 60,
                "min": 1,
                "max": 255,
                "step": 1
            },
        ]
    },
    {
        "type": "submit",
        "defaultValue": "Save"
    }
];
