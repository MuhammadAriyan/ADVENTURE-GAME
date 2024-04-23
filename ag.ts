#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

// declaring some variables so i can change them in future as i please

let healthPlayer = 100
let healingPotion = 3
let potionDropChance = 50
let minDamageEnemy = 5
let maxDamageEnemy = 20
let minDamagePlayer = 10
let maxDamagePlayer = 70
let minHealthEnemy = 50
let maxHealthEnemy = 100
//ENEMIES ARE INSPIRED BY MINECRAFT
const enemies = ['ZOMBIE','SKELETON','ENDERMAN','CREEPER']

//h.random() * (max - min + 1) + min);
//⚔︎💀💀💀

console.log(chalk.green("\n \t ## WELCOME TO THE MINECRAFT ## \t \n"))
let abc = true
GAME:
while(abc){
    console.log(`-----------------------------------------------`)
    let enemyPicker =  Math.floor(Math.random()*enemies.length)
    let enemy = enemies[enemyPicker]
    let enemyHealth = Math.floor(Math.random()* (maxHealthEnemy - minHealthEnemy) + minHealthEnemy)
    let potion = Math.floor(Math.random()*100)
    console.log(`\n \t ${enemy} IS NEARBY! \n`)
    while(healthPlayer>=1){
        console.log(chalk.yellow(`\t YOUR HP :${healthPlayer}`))
    console.log(chalk.yellow(`\t HEALING PORTIONS LEFT :${healingPotion}`))
    console.log(chalk.yellow(`\t ENEMIES HEALTH : ${enemyHealth}`))
    let option= await inquirer.prompt({
        type:"list",
        name:"do",
        message: chalk.magenta("\n \t WHAT DO YOU WANNA DO..."),
        choices:["\t ATTACK","\t RUN","\t HEAL"]
    })
    if(option.do === '\t ATTACK'){
            let enemyDamage = Math.floor(Math.random()*(maxDamageEnemy - minDamageEnemy ) + minDamageEnemy)
            let playerDamage = Math.floor(Math.random()* (maxDamagePlayer-minDamagePlayer)+ minDamageEnemy)
            console.log(chalk.green(`\n \t YOU GOT ${enemyDamage} & TOOK ${playerDamage} \t \n`))
            healthPlayer -= enemyDamage
            enemyHealth -= playerDamage
            if(enemyHealth<=0 && healthPlayer>1){
                console.log(chalk.blue(`\t ${enemy} IS DEAD!`))
                if(potion<50){
                    console.log(chalk.green(`${enemy} DROPPED A POTION`))
                    healingPotion++
                    console.log(chalk.green(`\t ${healingPotion} POTIONS LEFT`))
                }
                let restart = await inquirer.prompt({
                    type:"list",
                    name:"r",
                    message:"WANT TO CONTINUE DESCOVERING WORLD",
                    choices:["\t YES","\t NO"]
                })
                 if(restart.r==="\t YES"){
                continue GAME
                 }else if(restart.r==="\t NO"){
                break GAME
            }
            }
        if(healthPlayer<=0){
            console.log(chalk.red(`\t OOPS! YOU ARE KILLED...💀💀💀 \t`))
            break GAME
        }
         }if(option.do==='\t RUN'){
        console.log(chalk.redBright(`YOU RAN AWAY FROM ${enemy}!`))
         break
          }if(option.do==='\t HEAL'){
        if(healingPotion > 0){
            console.log(chalk.blue(`\n \t YOU HAVE USED 1 POTION \n`))
            healthPlayer += 30
            healingPotion --
            console.log(chalk.blue(`\n \t YOU HAVE ${healingPotion} POTION LEFT! \t \n`))
        }else{
            console.log(chalk.red(`\t NOT ENOUGH POTIONS!`))
        }
          }
    }
}