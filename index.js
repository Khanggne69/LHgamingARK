document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById("name");
    const mail = document.getElementById("mail");
    const number = document.getElementById("number");
    const text = document.getElementById("text");
    const submit = document.getElementById("submit");
    submit.addEventListener("click", ()=> {
        const data = {
            nameData: name.value,
            mailData: mail.value,
            numberData: number.value,
            textData: text.value,
        };
        if (data.nameData && data.mailData && data.numberData && data.textData ) {
            postGoogle(data);
            name.value = "";
            mail.value = "";
            number.value = "";
            text.value = "";

            alert("Đã gửi thành công!");
        } else {
            alert("thiếu");
        }
    });
});
async function postGoogle(data) {
    const formURL = 
    "https://docs.google.com/forms/d/e/1FAIpQLSctEfRmnQEarQuTnAwmhQw5n9jOOKxjMrDbmx4R9z6xTzAMSA/formResponse";
    const postName = "entry.1268559854";
    const postEmail = "entry.299570932";
    const postNumber = "entry.2048782139";
    const postText = "entry.1877188402";
    const formData = new FormData();
    formData.append(postName, data.nameData);
    formData.append(postEmail, data.mailData);
    formData.append(postNumber, data.numberData);
    formData.append(postText, data.textData);
    try {
        await fetch(formURL, {
            method: "POST",
            body: formData,
        });
    } catch {
        console.error("lỗi");
    }
}
  
//   https://docs.google.com/forms/d/e/1FAIpQLSctEfRmnQEarQuTnAwmhQw5n9jOOKxjMrDbmx4R9z6xTzAMSA/viewform?usp=dialog