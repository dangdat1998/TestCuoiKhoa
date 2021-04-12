let team=
[
    {
        name:"Arsenal",
        points:75,
        GD:45
    },
    {
        name:"Chelsea",
        points:75,
        GD:45
    },
    {
        name:"MU",
        points:88,
        GD:39
    },
    {
        name:"MC",
        points:88,
        GD:39
    }
];

function Rank(){
    let rank=1
    let p


    for (let i=0;i<team.length-1;i++){
        for ( let j=i+1;j<team.length;j++){
            if(team[i].points>=team[j].points){
                p=team[i]
                team[i]=team[j]
                team[j]=p
            }
        }
    }


    for (let i=0;i<team.length-1;i++)
    {
        if (team[i].points==team[i+1].points){
            if (team[i].GD>team[i+1].GD){
                p=team[i+1]
                team[i+1]=team[i]
                team[i]=p
        }
      }
    }

    for (let i=0;i<team.length-1;i++)
    {
        if (team[i].GD==team[i+1].GD){
            if (team[i].name>team[i+1].name){
                p=team[i+1]
                team[i+1]=team[i]
                team[i]=p
        }
      }
    }




    for (i=0;i<team.length;i++){
        team[i].position=rank
        rank++
    }
}

Rank()
console.log(team)


