import React, { useEffect } from 'react';

declare global {
    interface Window {
        chatbase: any;
    }
}

export default function ChatbaseWidget() {
    useEffect(() => {
        (function () {
            if (!window.chatbase || window.chatbase("getState") !== "initialized") {
                window.chatbase = (...args: any[]) => {
                    if (!window.chatbase.q) {
                        window.chatbase.q = [];
                    }
                    window.chatbase.q.push(args);
                };
                window.chatbase = new Proxy(window.chatbase, {
                    get(target, prop) {
                        if (prop === "q") {
                            return target.q;
                        }
                        return (...args: any[]) => target(prop, ...args);
                    },
                });
            }
            const onLoad = function () {
                const script = document.createElement("script");
                script.src = "https://www.chatbase.co/embed.min.js";
                script.id = "w67Z35bKUpKyIoQmnD24U";
                // @ts-ignore
                script.domain = "www.chatbase.co";
                document.body.appendChild(script);
            };
            if (document.readyState === "complete") {
                onLoad();
            } else {
                window.addEventListener("load", onLoad);
            }
        })();
    }, []);

    return null;
}
