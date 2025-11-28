export default class DomEventClass {
  private isLoading: boolean = false;

  TEXTURE_MAP: Record<string, string> = {
    planet: "planet/mars.png",
    rock: "rock/rock.png",
  };

  constructor(
    uploadChangeEvent: (file: File, texturePath: string) => void,
    wireframeChangeEvent: (checked: boolean) => void
  ) {
    this.createActionDom(uploadChangeEvent, wireframeChangeEvent);
  }

  private createActionDom(
    uploadChangeEvent: (file: File, texturePath: string) => void,
    wireframeChangeEvent: (checked: boolean) => void
  ) {
    // 创建上传OBJ文件按钮
    const uploadBtn = document.createElement("input");
    uploadBtn.type = "file";
    uploadBtn.accept = ".obj";
    uploadBtn.style.position = "absolute";
    uploadBtn.style.top = "10px";
    uploadBtn.style.right = "10px";
    uploadBtn.style.zIndex = "1000";
    uploadBtn.style.padding = "20px";
    uploadBtn.style.backgroundColor = "rgba(255,255,255,0.1)";
    document.body.appendChild(uploadBtn);

    uploadBtn.onchange = (e: Event) => {
      const input = e.target as HTMLInputElement;
      if (input.files && input.files.length > 0 && !this.isLoading) {
        const texturePath = input.files[0].name.split(".")[0];
        uploadChangeEvent(input.files[0], this.TEXTURE_MAP[texturePath]);
      }
    };

    // 添加一个checkbox
    const checkboxLabel = document.createElement("label");
    checkboxLabel.style.position = "absolute";
    checkboxLabel.style.top = "80px";
    checkboxLabel.style.right = "10px";
    checkboxLabel.style.zIndex = "1000";
    checkboxLabel.style.backgroundColor = "rgba(255,255,255,0.1)";
    checkboxLabel.style.padding = "8px";
    checkboxLabel.style.color = "#fff";
    checkboxLabel.style.fontSize = "14px";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "8px";
    checkbox.id = "isWireframe";

    checkboxLabel.appendChild(checkbox);
    checkboxLabel.appendChild(document.createTextNode("显示线框"));

    document.body.appendChild(checkboxLabel);

    checkbox.onchange = (e) => {
      const checked = (e.target as HTMLInputElement).checked;
      wireframeChangeEvent(checked);
    };

    // 添加加载提示
    const loadingIndicator = document.createElement("div");
    loadingIndicator.id = "loadingIndicator";
    loadingIndicator.style.position = "absolute";
    loadingIndicator.style.top = "50%";
    loadingIndicator.style.left = "50%";
    loadingIndicator.style.transform = "translate(-50%, -50%)";
    loadingIndicator.style.color = "#fff";
    loadingIndicator.style.fontSize = "18px";
    loadingIndicator.style.display = "none";
    loadingIndicator.textContent = "加载中...";
    document.body.appendChild(loadingIndicator);
  }
}
