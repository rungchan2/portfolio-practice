<template>

        <div class="slideArea">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide fstPage">
                
                <div class="developer">DEVELOPER</div>
                <h1>NEW FRONTEND</h1>
                <h2>너무 무리하지 말아요! 이미 당신은 잘 하고 있어요!!! <br/> 앞으로도 잘 할 수 있어요!!!</h2>

                <div class="button">
                  <button class="detail">자세히 보기</button>
                  <button class="toSite">사이트 보기</button>
                </div>

              </div>
              <div class="swiper-slide sndPage">
                <h1>Second Page!</h1>
              </div>
            </div>
          </div>

            <div class="swiper-pagination"></div>
              <div class="swiper-prev">
                <span class="material-symbols-outlined">arrow_forward_ios</span>
              </div>
              <div class="swiper-next">
                <span class="material-symbols-outlined">arrow_back_ios</span>
            </div>

        </div>





</template>


<script>
// import { Swiper } from "gsap-swiper"

export default {
  data() {
    return {
      img : [
        {
          name: 1,
          herf: '@/assets/slideArea.jpg'
        },
        {
          name: 2,
          herf: '@/assets/slideArea.jpg'
        }
      ]
    }
  },

  

}

</script>


<style lang="scss" scoped>


.slideArea {
  position: relative;
  .swiper-prev {
    position: absolute;
    right: 50px;
    top: 300px;
  }
  .swiper-next {
    position: absolute;
    left: 50px;
    top: 300px;
  }
  .swiper-container {

    .swiper-wrapper {

      .swiper-slide.fstPage {
        background-image: url("@/assets/slideArea.jpg");
        width: 1920px;
        height: 580px;
        z-index: -1;
        position: relative;
        .developer {
          position: absolute;
          width: 120px;
          height: 20px;
          left: 360px;
          top: 102px;
          box-sizing: border-box;
          background-color: #fff;
          border: rgb(255, 255, 255) solid 1px;
          border-radius: 13px;
          text-align: center;
        }
        h1 {
          font-family: 'Roboto', sans-serif;
          position: absolute;
          color: #fff;
          left: 360px;
          top: 120px;
          font-size: 120px;
          font-weight: 100;
        }
        h2 {
          color: #fff;
          position: absolute;
          left: 360px;
          top: 247px;
          font-size: 20px;
        }
        .button {
          position: absolute;
          left: 360px;
          top: 440px;
          display: flex;
          box-sizing: border-box;
          .detail {
            color: #000;
            background-color: #fff;
            width: 180px;
            height: 40px;
            text-align: center;
            margin-right: 10px;
            border: #fff 1px solid;
          }
          .toSite {
            color: #fff;
            background-color: #000;
            width: 180px;
            height: 40px;
            text-align: center;
            border: #000 1px solid;
          }
        }
      }
      .swiper-slide.sndPage {

      }
    }
  }
}
</style>
