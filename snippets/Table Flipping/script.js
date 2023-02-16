const { createApp } = Vue;

createApp({
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Chandler",
          desc: "I make jokes when i'm uncomfortable",
          photo:
            "https://i.pinimg.com/564x/2e/79/7a/2e797a7e7f25a898b8fa68f34d2e8b36.jpg",
        },
        {
          id: 2,
          title: "Joey",
          desc: "Joey doesn't share food",
          photo:
            "https://i.pinimg.com/564x/e3/94/1c/e3941c7913d06b842a08985580e18cb4.jpg",
        },
        {
          id: 3,
          title: "Monica",
          desc: "seven, seven, seven, seven, seveeen!!!",
          photo:
            "https://i.pinimg.com/564x/f6/2e/98/f62e98e7bdf5a63a29f4c777e3fb4dd8.jpg",
        },
        {
          id: 4,
          title: "Phoebe",
          desc: "Oh!! My eyes, my eyes!!",
          photo:
            "https://i.pinimg.com/originals/6a/ab/df/6aabdfa51a72b47465e61c44d19a028b.jpg",
        },
        {
          id: 5,
          title: "Rachel",
          desc: "he's a transpons... transponster!",
          photo:
            "https://i.pinimg.com/564x/44/24/9d/44249dd254abed4f38e7245729e41210.jpg",
        },
        {
          id: 6,
          title: "Ross",
          desc: "I'm fine",
          photo:
            "https://i.pinimg.com/564x/ac/7b/a7/ac7ba7c2f23dc6105be5062e0d285ae0.jpg",
        },
      ],
      currentNum: 0,
    };
  },
  computed: {
    currentCard() {
      return this.cards[this.currentNum];
    },
  },
  methods: {
    playFoward() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.out",
        },
        onComplete: () => {
          this.playReverse();
          if (this.currentNum >= 5) {
            this.currentNum = 0;
          } else {
            this.currentNum++;
          }
        },
      });
      tl.to("#mask-1", {
        yPercent: 100,
        scaleY: 1.4,
      })
        .to(
          "#mask-2",
          {
            yPercent: -100,
            scaleY: 1.4,
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`,
          },
          "<0.4"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 0%, 0% 0%)`,
          },
          "<0.3"
        );
    },
    playReverse() {
      let tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          ease: "sine.in",
        },
      });
      tl.to("#mask-1", {
        yPercent: -100,
        scaleY: 1.4,
      })
        .to(
          "#mask-2",
          {
            yPercent: 100,
            scaleY: 1.4,
          },
          "<"
        )
        .to(
          "#card-info-title",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
          },
          "<0.2"
        )
        .to(
          "#card-info-desc",
          {
            clipPath: `polygon(0 0, 100% 0, 100% 100%, 0% 100%)`,
          },
          "<0.3"
        );
    },
    nextCard() {
      this.playFoward();
    },
  },
}).mount("#app");
