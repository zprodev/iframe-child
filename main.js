const iframeParentOrigin = 'https://zprodev.github.io/iframe-parent/';

const uiElement = document.createElement('div');
uiElement.hidden = true;
document.body.appendChild(uiElement);

const textInputElement = document.createElement('input');
textInputElement.type = 'text';
uiElement.appendChild(textInputElement);

const buttonElement = document.createElement('button');
buttonElement.append('決定');
uiElement.appendChild(buttonElement);
buttonElement.addEventListener('click', () => {
    window.parent.postMessage({
        type: "決定ボタン押下",
        value: textInputElement.value,
    }, iframeParentOrigin);
});

window.addEventListener("message", (message) => {
    // 取得した内容を利用した処理
    if(message.data.message == 'showUI')
    {
        uiElement.hidden = false;
    }
    else if(message.data.message == 'hideUI')
    {
        uiElement.hidden = true;
    }
});
