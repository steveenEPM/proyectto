import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const SwalAlert2 = withReactContent(Swal)


const toastSwal = SwalAlert2.mixin({
  toast: false,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  width: "30%",
  grow: "row"
})

export const alertSwal2 = (text: string, icon: 'success' | 'error' | 'warning' | 'info' | 'question') => {

  toastSwal.fire({

    html: `
        <div style="display: flex;  align-items: center; margin-top: 20px;">
          ${getIconst(icon)}
          <strong>${text}</strong>
        </div>
      `,
  });
}


const getIconst = (icon: 'success' | 'error' | 'warning' | 'info' | 'question'): string => {

  let size: string = "60px"

  let color: string = "#4ade80" // 400

  if (icon == "success") {
    return `
         <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512" fill="${color}">
            <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"/>
        </svg>
        `
  } else if (icon == "error") {
    
    color = "#f87171"
    
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 384 512" fill="${color}">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
        </svg>
      `;
  } else if (icon == "info") {
    color = "#38bdf8"

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 128 512" fill="${color}">
          <path d="M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
        </svg>
      `;
  } else if (icon == "warning") {
    color="#fde047"
    
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512" fill="${color}">
      <path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480L40 480c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/>
    </svg>
  `
  }

  return ""
}