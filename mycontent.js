var myContent = [
    {
        "title": "JSON Tools",
        "links": {
            "http://jsonviewer.stack.hu/": "JSON Viewer",
            "http://jsonlint.com/": "JSON Validator",
            "http://json-ld.org/playground/": "JSON LD Playground"
        }
    },
    {
        "title": "Google universe",
        "links": {
            "https://play.google.com/music/": "Google Play Music",
            "https://mail.google.com/": "Google Mail",
            "https://calendar.google.com/": "Google Calendar",
            "https://keep.google.com/": "Google Keep",
            "https://photos.google.com/": "Google Photos",
            "https://contacts.google.com/": "Google Contacts",
            "https://www.google.com/android/devicemanager": "Android Device Manager"
        }
    },
    {
        "title": "Search",
        "contents": {
            "googleSearch": [
                "<form action='http://google.com/search'>",
                "<div style='width:80px; float:left'>Google:</div> <input autocomplete='off' name='q' id='googleSearch' style='width:100px'",
                "style='border:1px solid #aaaaaa; padding: 2px; margin: 0px; height: 20px; width: 150px;'/>",
                "</form>"
            ],
            "wikipediaSearch": [
                "<form action='https://en.wikipedia.org/wiki/Special:Search'>",
                "<div style='width:80px; float:left'>Wikipedia:</div> <input autocomplete='off' name='search' style='width:100px'",
                "style='border:1px solid #aaaaaa; padding: 2px; margin: 0px; height: 20px; width: 150px;'/>",
                "</form>"
            ]
        }
    },
    {
        "title": "Git feature branch merge",
        "cssClass": "grid-item--width2 git",
        "lines": [
            "git fetch origin",
            "git checkout -b branch-name origin/branch-name",
            "git merge develop",
            "git checkout develop",
            "git merge --no-ff branch-name",
            "git push origin develop"
        ]
    },
    {
        "title": "OS X shell cheatsheet",
        "cssClass": "grid-item--width2 git",
        "definitions": {
            "Clone existing repo": "git clone https://github.com/....git",
            "List all branches": "git branch -av",
            "Create new local branch": "git branch branch-name",
            "Switch to branch": "git checkout branch-name",
            "Create and switch to local branch": "git checkout -b branch-name",
            "Delete local branch": "git branch -d branch-name",
            "Delete remote branch": "git push origin --delete branch-name",
            "Revert one file": "git checkout filePath",
            "Merge feature branch into develop": ["git checkout develop", "git merge --no-ff branch-name"],
            "Set upstream and push": "git push --set-upstream origin branch-name"
        }
    },
    {
        "title": "Git cheatsheet",
        "cssClass": "grid-item--width2 console",
        "definitions": {
            "Starting nginx": "sudo nginx",
            "Stopping nginx": "sudo nginx -s stop",
            "Edit nginx config": "sudo vi $NGINX_HOME/nginx.conf",
            "Restarting nginx": "sudo nginx -s stop && sudo nginx",
            "Locate a file": "locate filename",
            "Locate a file v2": "sudo find / -type f -name filename",
            "List all environment variables": "printenv",
            "Stop a process by name": ["ps ax | grep processname", "kill pid"],
            "Stop a process by name v2": "kill `pgrep processname`",
            "Modify profile": "vi ~/.bash_profile",
            "Reload profile": "source ~/.bash_profile",
            "Show one environment variable": "echo $envname"
        }
    }
];