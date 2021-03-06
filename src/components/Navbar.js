import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.css"

const Navbar = () => {
  //   const [open, setOpen] = useState(false);
  return (
    <div className="sidenav">
      {/* <div className="sections">
        <div>
          <a href="#timeline">Timeline</a>
        </div>
        <div>
          <a href="#home">food</a>
        </div>
        <div>
          <a href="#coffee">coffee</a>
        </div>
      </div> */}
      <div className="links">
        <a href="https://www.instagram.com/debanik1997/">
          <img class="logo"
            alt="instagram"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMSA1MTEuOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNTEwLjk0OTIxOSAxNTAuNWMtMS4xOTkyMTktMjcuMTk5MjE5LTUuNTk3NjU3LTQ1Ljg5ODQzOC0xMS44OTg0MzgtNjIuMTAxNTYyLTYuNS0xNy4xOTkyMTktMTYuNS0zMi41OTc2NTctMjkuNjAxNTYyLTQ1LjM5ODQzOC0xMi44MDA3ODEtMTMtMjguMzAwNzgxLTIzLjEwMTU2Mi00NS4zMDA3ODEtMjkuNS0xNi4yOTY4NzYtNi4zMDA3ODEtMzQuODk4NDM4LTEwLjY5OTIxOS02Mi4wOTc2NTctMTEuODk4NDM4LTI3LjQwMjM0My0xLjMwMDc4MS0zNi4xMDE1NjItMS42MDE1NjItMTA1LjYwMTU2Mi0xLjYwMTU2MnMtNzguMTk5MjE5LjMwMDc4MS0xMDUuNSAxLjVjLTI3LjE5OTIxOSAxLjE5OTIxOS00NS44OTg0MzggNS42MDE1NjItNjIuMDk3NjU3IDExLjg5ODQzOC0xNy4yMDMxMjQgNi41LTMyLjYwMTU2MiAxNi41LTQ1LjQwMjM0MyAyOS42MDE1NjItMTMgMTIuODAwNzgxLTIzLjA5NzY1NyAyOC4zMDA3ODEtMjkuNSA0NS4zMDA3ODEtNi4zMDA3ODEgMTYuMzAwNzgxLTEwLjY5OTIxOSAzNC44OTg0MzgtMTEuODk4NDM4IDYyLjA5NzY1Ny0xLjMwMDc4MSAyNy40MDIzNDMtMS42MDE1NjIgMzYuMTAxNTYyLTEuNjAxNTYyIDEwNS42MDE1NjJzLjMwMDc4MSA3OC4xOTkyMTkgMS41IDEwNS41YzEuMTk5MjE5IDI3LjE5OTIxOSA1LjYwMTU2MiA0NS44OTg0MzggMTEuOTAyMzQzIDYyLjEwMTU2MiA2LjUgMTcuMTk5MjE5IDE2LjU5NzY1NyAzMi41OTc2NTcgMjkuNTk3NjU3IDQ1LjM5ODQzOCAxMi44MDA3ODEgMTMgMjguMzAwNzgxIDIzLjEwMTU2MiA0NS4zMDA3ODEgMjkuNSAxNi4zMDA3ODEgNi4zMDA3ODEgMzQuODk4NDM4IDEwLjY5OTIxOSA2Mi4xMDE1NjIgMTEuODk4NDM4IDI3LjI5Njg3NiAxLjIwMzEyNCAzNiAxLjUgMTA1LjUgMS41czc4LjE5OTIxOS0uMjk2ODc2IDEwNS41LTEuNWMyNy4xOTkyMTktMS4xOTkyMTkgNDUuODk4NDM4LTUuNTk3NjU3IDYyLjA5NzY1Ny0xMS44OTg0MzggMzQuNDAyMzQzLTEzLjMwMDc4MSA2MS42MDE1NjItNDAuNSA3NC45MDIzNDMtNzQuODk4NDM4IDYuMjk2ODc2LTE2LjMwMDc4MSAxMC42OTkyMTktMzQuOTAyMzQzIDExLjg5ODQzOC02Mi4xMDE1NjIgMS4xOTkyMTktMjcuMzAwNzgxIDEuNS0zNiAxLjUtMTA1LjVzLS4xMDE1NjItNzguMTk5MjE5LTEuMzAwNzgxLTEwNS41em0tNDYuMDk3NjU3IDIwOWMtMS4xMDE1NjIgMjUtNS4zMDA3ODEgMzguNS04LjgwMDc4MSA0Ny41LTguNjAxNTYyIDIyLjMwMDc4MS0yNi4zMDA3ODEgNDAtNDguNjAxNTYyIDQ4LjYwMTU2Mi05IDMuNS0yMi41OTc2NTcgNy42OTkyMTktNDcuNSA4Ljc5Njg3Ni0yNyAxLjIwMzEyNC0zNS4wOTc2NTcgMS41LTEwMy4zOTg0MzggMS41cy03Ni41LS4yOTY4NzYtMTAzLjQwMjM0My0xLjVjLTI1LTEuMDk3NjU3LTM4LjUtNS4yOTY4NzYtNDcuNS04Ljc5Njg3Ni0xMS4wOTc2NTctNC4xMDE1NjItMjEuMTk5MjE5LTEwLjYwMTU2Mi0yOS4zOTg0MzgtMTkuMTAxNTYyLTguNS04LjMwMDc4MS0xNS0xOC4zMDA3ODEtMTkuMTAxNTYyLTI5LjM5ODQzOC0zLjUtOS03LjY5OTIxOS0yMi42MDE1NjItOC43OTY4NzYtNDcuNS0xLjIwMzEyNC0yNy0xLjUtMzUuMTAxNTYyLTEuNS0xMDMuNDAyMzQzcy4yOTY4NzYtNzYuNSAxLjUtMTAzLjM5ODQzOGMxLjA5NzY1Ny0yNSA1LjI5Njg3Ni0zOC41IDguNzk2ODc2LTQ3LjUgNC4xMDE1NjItMTEuMTAxNTYyIDEwLjYwMTU2Mi0yMS4xOTkyMTkgMTkuMjAzMTI0LTI5LjQwMjM0MyA4LjI5Njg3Ni04LjUgMTguMjk2ODc2LTE1IDI5LjM5ODQzOC0xOS4wOTc2NTcgOS0zLjUgMjIuNjAxNTYyLTcuNjk5MjE5IDQ3LjUtOC44MDA3ODEgMjctMS4xOTkyMTkgMzUuMTAxNTYyLTEuNSAxMDMuMzk4NDM4LTEuNSA2OC40MDIzNDMgMCA3Ni41LjMwMDc4MSAxMDMuNDAyMzQzIDEuNSAyNSAxLjEwMTU2MiAzOC41IDUuMzAwNzgxIDQ3LjUgOC44MDA3ODEgMTEuMDk3NjU3IDQuMDk3NjU3IDIxLjE5OTIxOSAxMC41OTc2NTcgMjkuMzk4NDM4IDE5LjA5NzY1NyA4LjUgOC4zMDA3ODEgMTUgMTguMzAwNzgxIDE5LjEwMTU2MiAyOS40MDIzNDMgMy41IDkgNy42OTkyMTkgMjIuNTk3NjU3IDguODAwNzgxIDQ3LjUgMS4xOTkyMTkgMjcgMS41IDM1LjA5NzY1NyAxLjUgMTAzLjM5ODQzOHMtLjMwMDc4MSA3Ni4zMDA3ODEtMS41IDEwMy4zMDA3ODF6bTAgMCIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTI1Ni40NDkyMTkgMTI0LjVjLTcyLjU5NzY1NyAwLTEzMS41IDU4Ljg5ODQzOC0xMzEuNSAxMzEuNXM1OC45MDIzNDMgMTMxLjUgMTMxLjUgMTMxLjVjNzIuNjAxNTYyIDAgMTMxLjUtNTguODk4NDM4IDEzMS41LTEzMS41cy01OC44OTg0MzgtMTMxLjUtMTMxLjUtMTMxLjV6bTAgMjE2LjgwMDc4MWMtNDcuMDk3NjU3IDAtODUuMzAwNzgxLTM4LjE5OTIxOS04NS4zMDA3ODEtODUuMzAwNzgxczM4LjIwMzEyNC04NS4zMDA3ODEgODUuMzAwNzgxLTg1LjMwMDc4MWM0Ny4xMDE1NjIgMCA4NS4zMDA3ODEgMzguMTk5MjE5IDg1LjMwMDc4MSA4NS4zMDA3ODFzLTM4LjE5OTIxOSA4NS4zMDA3ODEtODUuMzAwNzgxIDg1LjMwMDc4MXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtNDIzLjg1MTU2MiAxMTkuMzAwNzgxYzAgMTYuOTUzMTI1LTEzLjc0NjA5MyAzMC42OTkyMTktMzAuNzAzMTI0IDMwLjY5OTIxOS0xNi45NTMxMjYgMC0zMC42OTkyMTktMTMuNzQ2MDk0LTMwLjY5OTIxOS0zMC42OTkyMTkgMC0xNi45NTcwMzEgMTMuNzQ2MDkzLTMwLjY5OTIxOSAzMC42OTkyMTktMzAuNjk5MjE5IDE2Ljk1NzAzMSAwIDMwLjcwMzEyNCAxMy43NDIxODggMzAuNzAzMTI0IDMwLjY5OTIxOXptMCAwIiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
        </a>
        <a href="https://www.linkedin.com/in/debanik1997/">
          <img 
          class="logo"
          alt="linkedin"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />
        </a>
        <a href="https://www.github.com/debanik1997/">
          <img class="logo"
            alt="github"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xMiAuNWMtNi42MyAwLTEyIDUuMjgtMTIgMTEuNzkyIDAgNS4yMTEgMy40MzggOS42MyA4LjIwNSAxMS4xODguNi4xMTEuODItLjI1NC44Mi0uNTY3IDAtLjI4LS4wMS0xLjAyMi0uMDE1LTIuMDA1LTMuMzM4LjcxMS00LjA0Mi0xLjU4Mi00LjA0Mi0xLjU4Mi0uNTQ2LTEuMzYxLTEuMzM1LTEuNzI1LTEuMzM1LTEuNzI1LTEuMDg3LS43MzEuMDg0LS43MTYuMDg0LS43MTYgMS4yMDUuMDgyIDEuODM4IDEuMjE1IDEuODM4IDEuMjE1IDEuMDcgMS44MDMgMi44MDkgMS4yODIgMy40OTUuOTgxLjEwOC0uNzYzLjQxNy0xLjI4Mi43Ni0xLjU3Ny0yLjY2NS0uMjk1LTUuNDY2LTEuMzA5LTUuNDY2LTUuODI3IDAtMS4yODcuNDY1LTIuMzM5IDEuMjM1LTMuMTY0LS4xMzUtLjI5OC0uNTQtMS40OTcuMTA1LTMuMTIxIDAgMCAxLjAwNS0uMzE2IDMuMyAxLjIwOS45Ni0uMjYyIDEuOTgtLjM5MiAzLS4zOTggMS4wMi4wMDYgMi4wNC4xMzYgMyAuMzk4IDIuMjgtMS41MjUgMy4yODUtMS4yMDkgMy4yODUtMS4yMDkuNjQ1IDEuNjI0LjI0IDIuODIzLjEyIDMuMTIxLjc2NS44MjUgMS4yMyAxLjg3NyAxLjIzIDMuMTY0IDAgNC41My0yLjgwNSA1LjUyNy01LjQ3NSA1LjgxNy40Mi4zNTQuODEgMS4wNzcuODEgMi4xODIgMCAxLjU3OC0uMDE1IDIuODQ2LS4wMTUgMy4yMjkgMCAuMzA5LjIxLjY3OC44MjUuNTYgNC44MDEtMS41NDggOC4yMzYtNS45NyA4LjIzNi0xMS4xNzMgMC02LjUxMi01LjM3My0xMS43OTItMTItMTEuNzkyeiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L3N2Zz4=" />
        </a>
      </div>
      
    </div>
  )
}

export default Navbar
