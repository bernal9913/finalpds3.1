<template>
    <div>
        <button @click="openChat"
        style="margin-top: 10px;
        margin-left: 10px;
        padding: 5px 10px;
        background-color: #9f9f9f;
        color: #fff;
        border: none;
        border-radius: 3px;"> <img src="../assets/ChatLogo.png"/> Abrir chat</button>

        <div v-if="showChatModal" class="chat-modal">
            <div class="chat-window">
                <div class="chat-messages">
                    <div v-for="message in messages" :key="message.id" class="message">
                        <div class="message-sender">{{ message.sender }}</div>
                        <div class="message-content">{{ message.content }}</div>
                    </div>
                </div>
                <div class="chat-input">
                    <input v-model="newMessage" placeholder="Escribe un mensaje..." />
                    <button @click="sendMessage">Enviar</button>
                </div>
            </div>
            <button class="close-button" @click="closeChat">X</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messages: [
                { id: 1, sender: "John", content: "Hola! 👋🏻" },
                { id: 2, sender: "Jane", content: "Holaa!" },
                { id: 3, sender: "John", content: "¿Como estás?" },
                { id: 4, sender: "Jane", content: "Estoy bien, gracias! 😁" },
            ],
            newMessage: "",
            showChatModal: false,
        };
    },
    methods: {
        openChat() {
            this.showChatModal = true;
        },
        closeChat() {
            this.showChatModal = false;
        },
        sendMessage() {
            if (this.newMessage.trim() !== "") {
                const newId = this.messages.length + 1;
                this.messages.push({
                    id: newId,
                    sender: "You",
                    content: this.newMessage.trim(),
                });
                this.newMessage = "";
            }
        },
    },
};
</script>

<style scoped>
.chat-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.close-button {
    position: absolute;
    top: 184px;
    right: 330px;
    background-color: transparent;
    border: none;
    color: #000;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
}

/* Rest of the styles */
.chat-window {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 300px;
    width: 50%;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 50px;
    border-radius: 10px;
    background: #f9f9f9;
}

.chat-messages {
    flex: 1;
    overflow-y: auto;
}

.message {
    margin-bottom: 10px;
}

.message-sender {
    font-weight: bold;
}

.chat-input {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

input {
    flex: 1;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
}

button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}
</style>
  