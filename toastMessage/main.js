// Toast function
function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");

    //Tự động xóa thông báo
    const auto =  setTimeout(function()
    {
      main.removeChild(toast);
    },duration + 1000)

    //Tắt thông báo khi bấm nút close
    toast.onclick = function(e)
    {
      if(e.target.closest('.toast__close'))
      {
        main.removeChild(toast);
        clearTimeout(auto);
      }
    };
    //Tạo mảng các icon
    const icons =
    {
      success: 'fas fa-check-circle',
      warning: 'fas fa-exclamation-circle',
      error: 'fas fa-exclamation-circle',
      infor: 'fas fa-infor-circle'
    };

    const delay = (duration / 1000).toFixed(2);
    //Lấy kiểu icon
    const icon = icons[type];
    toast.classList.add("toast", `toast--${type}`);
    toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`
    toast.innerHTML = `
                    <div class="toast__icon">
                        <i class="${icon}"></i>
                    </div>
                    <div class="toast__body">
                        <h3 class="toast__title">${title}</h3>
                        <p class="toast__msg">${message}</p>
                    </div>
                    <div class="toast__close">
                        <i class="fas fa-times"></i>
                    </div>
                `;
    main.appendChild(toast);

    
  }
}

function showSuccessToast()
{
  toast({
    title: "Success",
    message: "You are created account on F8!",
    type: 'success',
    duration: 3000
  })
}
function showErrorToast()
{
  toast({
    title: "Hello",
    message: "Something wrong, please contact to admin!",
    type: 'error',
    duration: 3000
  })
}