import { Saxon } from "./Saxon";
import { Viking } from "./Viking";

export class War {
    vikingArmy:Viking[] = [];
    saxonArmy:Saxon[] = [];

    addViking(viking:Viking){
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon:Saxon){
        this.saxonArmy.push(saxon);
    }
    vikingAttack(){
        let randomSaxonIndex= Math.floor(Math.random()*this.saxonArmy.length);
        let randomVikingIndex= Math.floor(Math.random()*this.vikingArmy.length);

        this.saxonArmy[randomSaxonIndex].receiveDamage(this.vikingArmy[randomVikingIndex].strength);

        if (this.saxonArmy[randomSaxonIndex].health <= 0) {
            this.saxonArmy = this.saxonArmy.filter((saxon) => {
                return this.saxonArmy[randomSaxonIndex] !== saxon;
            })
            return "A Saxon has died in combat";
        }
    }
    saxonAttack(){
        let randomSaxonIndex= Math.floor(Math.random()*this.saxonArmy.length);
        let randomVikingIndex= Math.floor(Math.random()*this.vikingArmy.length);

        this.vikingArmy[randomVikingIndex].receiveDamage(this.saxonArmy[randomSaxonIndex].strength);

        if (this.vikingArmy[randomVikingIndex].health <= 0) {
            this.vikingArmy = this.vikingArmy.filter((viking) => {
                return this.vikingArmy[randomVikingIndex] !== viking;
            })
        }else{
            return `${this.vikingArmy[randomVikingIndex].name} has received ${this.saxonArmy[randomSaxonIndex].strength} points of damage`
        }
    }
    showStatus(){
        if (this.saxonArmy.length === 0)
        return "Vikings have won the war of the century!";
    }
}