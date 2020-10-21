<template>
  <div class="about">
    <img
      src="https://media-exp1.licdn.com/dms/image/C4D03AQHedPoNRU-c0A/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=Ocx1iDnWAqwMVB6GK6W77K_O0460U54i1J6FAv7qjMw"
      alt="Vitor Trimer"
    />
    <div class="speech">
      <p>This website was made by <strong>Vitor Trimer</strong> in 2020.</p>
      <p>
        Website made with the pourpose of study and try
        <strong>Vuejs</strong> and <strong>Vuex</strong>
      </p>
      <p>
        <a
          href="https://dribbble.com/shots/6823172-Anime-Streaming-Service-Design"
          target="_blank"
        >
          Main layout inspiration for this project
        </a>
      </p>
      <p>This project uses <a href="https://jikan.docs.apiary.io/#introduction/information/links" target="_blank">Jinkan</a> FREE API</p>
      <p>New routes and details page are still under construction</p>
      <br />
      <br />
      <p>Social Medias</p>
      <p>
        <a href="https://www.linkedin.com/in/vitor-trimer-272152153/" target="_blank">Linkedin</a> | 
        <a href="https://www.twitch.tv/sqslavv" target="_blank">Twitch</a>
      </p>
    </div>
  </div>
</template>

<style scoped>
.about {
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.speech {
  padding-top: 16px;
  text-align: center;
}

.about img {
  border-radius: 50%;
  border: 2px solid #fd9330;
}

.about a {
  color: #fd9330;
}
</style>
