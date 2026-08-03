<template>
  <section class="hero">
    <div class="overlay"></div>
    <div class="couple">
      <div class="person">
        <img src="/avatars/boy.jpg" alt="boy" />
        <span>杰杰</span>
      </div>
      <div class="heart">♥</div>
      <div class="person">
        <img src="/avatars/girl.jpg" alt="girl" />
        <span>安安</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero{
 height:360px;
 background:url('/images/classroom.jpg') center/cover;
 position:relative;
 display:flex;
 justify-content:center;
 align-items:center;
}
.overlay{position:absolute;inset:0;background:rgba(0,0,0,.12)}
.couple{z-index:1;display:flex;align-items:center;gap:55px;color:white;font-size:22px}
.person{display:flex;flex-direction:column;align-items:center;gap:12px}
.person img{width:120px;height:120px;border-radius:50%;border:5px solid white;object-fit:cover}
.heart{font-size:48px;color:#ff7895}
</style>