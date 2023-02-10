export class Video{

    constructor(
        private id: string,
        private title: string,
        private duration: number,
        private uploadAt: string
    ){}

    public getId(): string{
        return this.id;
    }

    public setId(value: string): void{
        this.id = value;
    }

    public getTitle(): string{
        return this.title;
    }

    public setTitle(value:string): void{
        this.title = value;
    }

    public getDuration(): number{
        return this.duration;
    }

    public setDuration(value: number): void{
        this.duration = value;
    }

    public getUploadAt(): string{
        return this.uploadAt;
    } 

    public setUploadAt(value: string): void{
        this.uploadAt = value;
    }
}

// testar o video, criando uma nova instância da classe video. 

const testVideo = new Video(
    "u001",
    "Astrodev",
    200,
    "2023-01-03 12:02:00"
)

console.table(testVideo);
console.log("Id video: ", testVideo.getId());
testVideo.setTitle("Studies Node");
console.table(testVideo);

