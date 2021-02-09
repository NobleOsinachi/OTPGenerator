export class Program {
    public static Main(): void {
        console.log(this.GenerateCode( 6 ));
        return;
    }

    private static GenerateCode( numberOfLetters: number ): string {
        let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let output: string[] = [];
        let final = "";
        for ( let i = 0; i < numberOfLetters; i++ ) {
            let x = Math.floor( Math.random() * letters.length );
            output.push( letters.charAt( x ) );
        }
        for ( var j = 0; j < output.length; j++ ) {
            final = final + output[j];
        }
        return final;
    }
}
