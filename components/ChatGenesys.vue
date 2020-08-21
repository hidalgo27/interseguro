<template>
  <div>
    <div class="animated-chat tada btnRadioTotalSoloRadio d-lg flex" id="chat" @click="loadChatbox">
      <!-- <img src="../assets/home/chat-icono.svg" alt="chat" id="chat-icono"> -->
      <!-- <img src="../assets/home/chat.png" alt="chat" id="chat-texto"> -->
    </div>
    <div class="chatbox" ref="chatbox" :style="{display:'block', margin: '0 0 -1500px'}">
      <span class="chat-text">Estamos para ayudarte</span>
      <div
        id="smartchatbox_img901621879"
        style="width: 280px; height: 450px; overflow: hidden; margin: auto; padding: 0;"
      >
        <div
          id="smartchatbox901621879"
          style="width: 280px; height: 450px; overflow: hidden; margin: auto; padding: 0; border:0;"
        >
          <iframe
            title="Chat genesys"
            src="https://www.interseguro.pe/chat/Chat.jsp?sa=D&amp;amp;source=hangouts&amp;amp;ust=1533655085668000&amp;amp;usg=AFQjCNEPH3fWoPt5vIgJmH2_tN37iq3yPQ&amp;amp;Origen=VIAJES"
            scrolling="no"
            frameborder="0"
            width="280px"
            height="450px"
            style="border:0; margin:0; padding: 0;"
          ></iframe>
        </div>
      </div>

      <div id="close-chat" @click="closeChatbox" ref="closeChat" :style="{display:'block'}">X</div>
      <div id="minim-chat" @click="minimChatbox" ref="minimChat" :style="{display:'block'}">
        <span class="minim-button">&minus;</span>
      </div>
      <div id="maxi-chat" @click="loadChatbox" ref="maxiChat">
        <span class="maxi-button">&plus;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loadChatbox() {
      let minChat_ = this.$refs.minimChat;
      minChat_.style.display = "block";
      let maxiChat_ = this.$refs.maxiChat;
      maxiChat_.style.display = "none";
      let chatbox_ = this.$refs.chatbox;
      chatbox_.style.margin = "0";
    },
    closeChatbox() {
      let chatbox_ = this.$refs.chatbox;
      chatbox_.style.margin = "0 0 -1500px 0";
    },
    minimChatbox() {
      let minChat_ = this.$refs.minimChat;
      minChat_.style.display = "none";
      let maxiChat_ = this.$refs.maxiChat;
      maxiChat_.style.display = "block";
      let chatbox_ = this.$refs.chatbox;
      chatbox_.style.margin = "0 0 -440px 0";
    }
  }
};
</script>
<style>
#chat,
#chat:after,
.chatbox {
  transition: all 0.4s ease-in-out;
}

#chat,
#close-chat,
.chat-text,
.maxi-button,
.minim-button {
  font-weight: 700;
  cursor: pointer;
  font-family: Omnes, Arial, sans-serif;
  text-align: center;
  height: 24px;
  line-height: 24px;
  letter-spacing: 2px;
  color: #343434;
}

#chat:after,
#chat:before {
  position: absolute;
  border-style: solid;
  content: "";
}

#close-chat,
.chatbox {
  border: 1px solid #a8a8a8;
}

.chatbox {
  position: fixed;
  bottom: 0;
  right: 10px;
  margin: 0 0 -1500px;
  background: #fff;
  border-bottom: none;
  padding: 28px 10px 10px;
  z-index: 100000;
}

#close-chat,
.maxi-button,
.minim-button {
  font-size: 24px;
  border: 1px solid #dedede;
  background: #fefefe;
  position: absolute;
}

#close-chat {
  top: 2px;
  right: 2px;
  width: 20px;
  z-index: 2;
}

#maxi-chat,
#minim-chat {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
  z-index: 1;
}

.maxi-button,
.minim-button {
  top: 2px;
  right: 26px;
  width: 20px;
}

.chat-text {
  position: absolute;
  top: 5px;
  left: 10px;
  font-size: 16px;
}

#chat,
.chatButton {
  position: fixed;
  bottom: 57px; /*10px;*/
  width: 226px; /*133px;*/
  border-radius: 3px;
  padding: 2px 8px;
  font-size: 16px;
  background: none; /*#3FA6F2*/ /*COLOR DE FONDO*/
  z-index: 5000;
}

#chat {
  right: 30px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  justify-content: flex-end;
}

.chatButton {
  right: 153px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

#chat:before {
  display: none;
  border-color: #fff transparent transparent;
  left: 7px;
  bottom: -10px;
}

#chat:after {
  display: none;
  border-width: 9px 8px 0 0;
  border-color: #3fa6f2 transparent transparent;
  left: 8px;
  bottom: -8px;
}

#chat:hover {
  background: transparent /*#fff*/;
}

#chat:hover:after {
  border-color: #fff transparent transparent !important;
}


@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale(1);
  }
  10%,
  20% {
    -webkit-transform: scale(0.9) rotate(-3deg);
  }
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale(1.1) rotate(3deg);
  }
  40%,
  60%,
  80% {
    -webkit-transform: scale(1.1) rotate(-3deg);
  }
  100% {
    -webkit-transform: scale(1) rotate(0);
  }
}

@keyframes tada {
  0% {
    transform: scale(1);
  }
  10%,
  20% {
    transform: scale(0.9) rotate(-3deg);
  }
  30%,
  50%,
  70%,
  90% {
    transform: scale(1.1) rotate(3deg);
  }
  40%,
  60%,
  80% {
    transform: scale(1.1) rotate(-3deg);
  }
  100% {
    transform: scale(1) rotate(0);
  }
}

.tada {
  -webkit-animation-name: tada;
  animation-name: tada;
}

@-webkit-keyframes hvr-pulse-grow {
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

@keyframes hvr-pulse-grow {
  to {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}

/*chat2*/
.round-button {
  width: 25%;
}

#btnchat2 {
  position: fixed;
  bottom: 10px;
  right: 300px;
  width: 133px;
  border-radius: 3px;
  padding: 2px 8px;
  font-size: 16px;
  background: #fff;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.round-button-circle {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 50%;
  border: 10px solid #cfdcec;
  overflow: hidden;
  background: #4679bd;
  box-shadow: 0 0 3px gray;
}

.round-button-circle:hover {
  background: #30588e;
}

.round-button a {
  display: block;
  float: left;
  width: 100%;
  padding-top: 50%;
  padding-bottom: 50%;
  line-height: 1em;
  margin-top: -0.5em;
  text-align: center;
  color: #e2eaf3;
  font-family: Verdana;
  font-size: 1.2em;
  font-weight: 700;
  text-decoration: none;
}

#chat-icono {
  width: 75px;
  right: -10px;
  top: -12px;
  position: absolute;
  z-index: 20;
}
#chat-texto {
  width: 20px;
  height: 41px !important;
  float: right;
  clear: none;
  position: relative;
  transition: all 0.3s ease;
  margin-top: 7px;
}
#chat:hover #chat-texto {
  width: 100%;
  height: 41px !important;
  float: right;
  clear: none;
  position: relative;
}

@media only screen and (max-width: 720px) {
  #chat {
    display: none !important;
  }
}
@media screen and (orientation: landscape) and (max-width: 740px) and (max-height: 400px) {
  #chat {
    display: none !important;
  }
}
</style>

