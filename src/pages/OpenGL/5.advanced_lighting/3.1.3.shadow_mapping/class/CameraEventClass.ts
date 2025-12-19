import Camera, { CameraMovement } from "./CameraClass.ts";

export default class CameraEventClass {
  camera!: Camera;
  keysPressed: Record<string, boolean> = {};

  firstMouse: boolean = true;

  lastX: number = 0;
  lastY: number = 0;
  constructor(camera: Camera, canvas: HTMLCanvasElement) {
    this.camera = camera;

    this.lastX = canvas.width / 2.0;
    this.lastY = canvas.height / 2.0;

    this.initInputEvent(canvas);
  }

  initInputEvent(canvas: HTMLCanvasElement) {
    document.onkeydown = (event) => {
      this.keysPressed[event.key] = true;
    };

    document.onkeyup = (event) => {
      this.keysPressed[event.key] = false;
    };

    canvas.onmousemove = (event) => {
      this.updateCameraPosByMouse(event);
    };

    canvas.onwheel = (event) => {
      this.updateCameraPosByWheel(event);
    };
  }

  updateCameraPosition(deltaTime: number) {
    if (this.keysPressed["w"]) {
      this.camera.processKeyboard(CameraMovement.FORWARD, deltaTime);
    }
    if (this.keysPressed["s"]) {
      this.camera.processKeyboard(CameraMovement.BACKWARD, deltaTime);
    }
    if (this.keysPressed["a"]) {
      this.camera.processKeyboard(CameraMovement.LEFT, deltaTime);
    }
    if (this.keysPressed["d"]) {
      this.camera.processKeyboard(CameraMovement.RIGHT, deltaTime);
    }
  }

  updateCameraPosByMouse(event: MouseEvent): void {
    const xpos: number = event.clientX;
    const ypos: number = event.clientY;

    if (this.firstMouse) {
      this.lastX = xpos;
      this.lastY = ypos;
      this.firstMouse = false;
    }

    const xoffset: number = xpos - this.lastX;
    // 注意这里是反向
    // 因为在屏幕坐标系里，Y 轴向下是正值；但在我们的相机 pitch 中，向上抬头应该是正值，所以需要反向。
    const yoffset: number = this.lastY - ypos;
    this.lastX = xpos;
    this.lastY = ypos;
    this.camera.processMouseMovement(xoffset, yoffset);
  }

  updateCameraPosByWheel(event: WheelEvent): void {
    event.preventDefault();
    this.camera.processMouseScroll(event.deltaY);
  }
}
