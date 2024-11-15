document.addEventListener("DOMContentLoaded", function () {
  const promptInput = document.getElementById("promptInput");
  const generateBtn = document.getElementById("generateBtn");
  const generatingContainer = document.getElementById("generatingContainer");
  const imageGallery = document.getElementById("imageGallery");

  generateBtn.addEventListener("click", async function () {
    const prompt = promptInput.value.trim();
    if (!prompt) {
      alert("请输入图片描述");
      return;
    }

    // 添加生成中的占位图
    const loadingCard = document.createElement("div");
    loadingCard.className = "image-card";
    loadingCard.innerHTML = `
            <div style="height: 200px; display: flex; align-items: center; justify-content: center;">
                <span style="color: #007bff;">正在生成图片...</span>
            </div>
        `;
    generatingContainer.appendChild(loadingCard);

    // 这里应该是调用AI图片生成API的代码
    // 示例：模拟图片生成过程
    setTimeout(() => {
      // 移除生成中的占位图
      loadingCard.remove();

      // 添加生成的图片到图库
      const imageCard = document.createElement("div");
      imageCard.className = "image-card";
      imageCard.innerHTML = `
                <img src="https://via.placeholder.com/300" alt="${prompt}">
            `;
      imageGallery.insertBefore(imageCard, imageGallery.firstChild);

      // 清空输入框
      promptInput.value = "";
    }, 2000);
  });

  // 添加 FAQ 交互
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // 关闭其他打开的FAQ项
      faqItems.forEach((otherItem) => {
        if (otherItem !== item && otherItem.classList.contains("active")) {
          otherItem.classList.remove("active");
        }
      });

      // 切换当前FAQ项的状态
      item.classList.toggle("active");
    });
  });

  // 添加价格卡片的点击处理
  const pricingBtns = document.querySelectorAll(".pricing-btn");

  pricingBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const plan =
        this.closest(".pricing-card").querySelector("h3").textContent;
      if (plan === "企业版") {
        alert("我们的客服会尽快与您联系！");
      } else {
        alert(`您选择了${plan}，即将跳转到支付页面...`);
      }
    });
  });
});
