// 在提交表单时，保存数据到localStorage
document.getElementById("meetingForm").addEventListener("submit", function(event){
    event.preventDefault();

    const date = document.getElementById("date").value;
    const name = document.getElementById("name").value;

    // 将数据保存到localStorage
    let participants = JSON.parse(localStorage.getItem("participants") || "[]");
    participants.push({ date, name });
    localStorage.setItem("participants", JSON.stringify(participants));

    // 更新列表
    updateParticipantsList();
    
    // 清空输入
    document.getElementById("date").value = '';
    document.getElementById("name").value = '';
});

// 页面加载时，从localStorage中获取数据并显示
window.addEventListener("DOMContentLoaded", function() {
    updateParticipantsList();
});

function updateParticipantsList() {
    const participantsList = document.getElementById("participantsList");
    participantsList.innerHTML = '';  // 清空列表

    let participants = JSON.parse(localStorage.getItem("participants") || "[]");
    participants.forEach(participant => {
        const listItem = document.createElement("li");
        listItem.textContent = `日期: ${participant.date}, 名字: ${participant.name}`;
        participantsList.appendChild(listItem);
    });
}
