/* Classes, visible gear layers, and class combat artwork. */
MW.jobs={traveler:{name:'여행자',color:'#70a4b6',skill:'달빛베기',hp:0,atk:0,def:0,detail:'전직 전의 자유로운 여행자'},warrior:{name:'전사',color:'#a67b65',skill:'회전베기',hp:40,atk:0,def:3,detail:'검과 중갑 · 생명 +40, 방어 +3 · 근접 전투'},archer:{name:'궁수',color:'#759c78',skill:'삼연사',hp:0,atk:3,def:0,detail:'활과 경갑 · 공격 +3 · 사거리 230'},mage:{name:'마법사',color:'#9a86bc',skill:'별빛 폭발',hp:0,atk:6,def:0,detail:'지팡이와 로브 · 공격 +6 · 사거리 200'}};
for(let tier=1;tier<=4;tier++){
 for(const [job,stem,kind] of [['archer','달결궁','bow'],['mage','별빛 지팡이','staff']])MW.items.push({id:job+'weapon'+tier,type:'weapon',job,kind,tier,name:['수련의 ','청죽의 ','별철의 ','여명의 '][tier-1]+stem,price:[160,440,1050,2200][tier-1],atk:[10,24,48,82][tier-1],desc:'공격 +'+[10,24,48,82][tier-1]+' · '+MW.jobs[job].name+' 전용'});
 for(const [job,stem] of [['warrior','판금 갑옷'],['archer','사냥꾼 경갑'],['mage','별무늬 로브']])MW.items.push({id:job+'armor'+tier,type:'armor',job,tier,name:['수련의 ','청죽의 ','별철의 ','여명의 '][tier-1]+stem,price:[120,360,850,1800][tier-1],def:[4,10,20,34][tier-1],desc:'방어 +'+[4,10,20,34][tier-1]+' · '+MW.jobs[job].name+' 전용'});
}
(()=>{const R=MW.Renderer.prototype;
R.player=function(player,face=0,frame=0){const job=MW.jobs[player.job]||MW.jobs.traveler,armor=MW.items.find(i=>i.id===player.equip.armor),weapon=MW.items.find(i=>i.id===player.equip.weapon);return this.art('player8:'+job.name+':'+(armor?.id||'-')+':'+(weapon?.id||'-')+':'+face+':'+frame,80,90,c=>{const p=(x,y,w,h,col)=>this.rect(c,x,y,w,h,col),back=face===2;
 c.translate(0,6);if(face===3){c.translate(80,0);c.scale(-1,1);}
 const gear=()=>{if(!weapon)return;const tier=weapon.tier||1,gold=['#c8a67d','#93c5a4','#b1c7ea','#f4d394'][tier-1];if(weapon.kind==='bow'){for(let y=0;y<36;y++){const bend=Math.round(Math.sin(y/36*Math.PI)*9);p(59+bend,34+y,3,1,gold);p(58,34+y,1,1,'#e7dfc2');}p(54,50,17,2,'#a08158');p(70,49,4,4,'#d8ded3');p(24,26,6,26,'#67573e');p(26,22,2,9,'#c3af81');p(30,23,2,9,'#e0cab1');}
 else if(weapon.kind==='staff'){p(60,33,3,45,'#756044');p(61,35,1,40,gold);p(57,28,9,8,gold);p(58,25,7,7,'#537fa7');p(60,24,3,7,'#b2ece7');p(60,24,1,3,'#f2ffff');p(56,33,11,2,'#d8c794');}
 else{p(60,31,4,42,'#52737d');p(60,31,2,39,'#d9e6e2');p(61,27,2,6,'#edf5dd');p(56,70,12,3,gold);p(60,73,4,9,'#6b5040');p(61,74,1,7,'#b7945e');}};
 if(back)gear();c.drawImage(this.hero(job.color,face===3?1:face,frame),16,18);
 // Class silhouettes remain distinct even with no equipment.
 if(player.job==='warrior'){p(30,22,23,9,'#465963');p(32,20,19,3,'#71818a');p(33,21,14,1,'#b4c0bd');p(29,29,25,3,'#293d48');p(50,29,3,11,'#647983');p(40,17,3,6,'#ac6557');p(29,46,8,8,'#6b797b');p(48,46,8,8,'#6b797b');}
 if(player.job==='archer'){p(30,23,21,9,'#355847');p(32,20,17,4,'#587b56');p(30,23,2,8,'#84a471');p(29,30,24,2,'#213f37');p(48,20,2,8,'#dbd3a4');p(50,19,2,5,'#f0e1b5');p(33,49,3,18,'#785f43');p(36,52,3,17,'#b29461');}
 if(player.job==='mage'){for(let y=0;y<17;y++)p(41-Math.floor(y*.6),15+y,3+Math.floor(y*1.2),1,y<3?'#b8a6d0':'#635582');p(26,31,31,3,'#413852');p(29,31,26,1,'#b6a1cc');p(39,25,4,3,'#d8c691');p(30,68,22,5,'#6d598b');p(31,71,20,2,'#d3ba91');}
 if(armor){const tier=armor.tier||1,kind=armor.job||'traveler',base=(kind==='mage'?['#8070a5','#648d9b','#8b85c1','#b79a6d']:kind==='archer'?['#718d60','#509a78','#687fa3','#b6a268']:['#7b8991','#5d927c','#728bb7','#bfa574'])[tier-1],light=this.tint(base,40),dark=this.tint(base,-35);
 if(kind==='warrior'){p(30,46,23,21,dark);p(32,46,19,18,base);for(let y=49;y<64;y+=4){p(33,y,17,1,light);p(33,y+1,17,1,dark);}p(27,45,8,7,base);p(49,45,8,7,base);p(27,45,8,1,light);p(49,45,8,1,light);p(31,65,22,6,base);p(41,48,2,15,light);}
 else if(kind==='mage'){p(30,47,24,27,dark);p(32,47,20,25,base);p(29,48,6,17,base);p(50,48,6,17,base);p(34,47,2,24,light);p(48,48,2,23,light);p(32,70,20,2,'#e7cf9a');for(const [x,y]of [[40,51],[44,61],[37,65]]){p(x,y,3,1,'#eee4c4');p(x+1,y-1,1,3,'#eee4c4');}}
 else if(kind==='archer'){p(31,46,22,22,dark);p(33,46,18,19,base);p(33,47,3,17,light);p(34,49,16,2,'#8d7151');p(36,52,13,2,'#c2a674');p(39,55,3,10,'#72543c');p(34,64,16,3,'#c0a26b');p(49,48,6,7,base);p(27,55,7,5,dark);}
 else{p(31,47,22,24,base);p(33,48,2,21,light);p(49,48,2,22,dark);p(40,48,2,21,'#e4d4ae');p(31,58,22,3,'#8a724c');}p(40,59,4,3,'#ead49a');if(back)p(36,50,12,9,dark);}
 if(!back)gear();
 });};
const baseEffect=R.combatEffect;
R.combatEffect=function(game){const s=game.strike;if(!s)return;const projectile=s.kind==='bow'||s.kind==='staff',archerSkill=s.kind==='skill'&&s.job==='archer',mageSkill=s.kind==='skill'&&s.job==='mage';if(!projectile&&!archerSkill&&!mageSkill){baseEffect.call(this,game);return;}const c=this.ctx,t=1-game.slash/(s.kind==='skill'?.45:.22),angle=[Math.PI/2,0,-Math.PI/2,Math.PI][s.face];c.save();c.translate(s.x,s.y-38);c.rotate(angle);c.globalAlpha=Math.min(1,(1-t)*3);const p=(x,y,w,h,col)=>this.rect(c,x,y,w,h,col);
 if(s.kind==='bow'||archerSkill){for(const offset of archerSkill?[-.22,0,.22]:[0]){c.save();c.rotate(offset);let x=35+t*(archerSkill?230:190);p(x-35,-1,35,2,'#d9ba7c');p(x-35,-3,7,1,'#7caf9a');p(x-35,2,7,1,'#7caf9a');p(x,-3,6,6,'#eff5de');p(x+6,-1,3,2,'#fff8cf');c.restore();}}
 else if(mageSkill){let x=100;for(let i=0;i<3;i++){c.strokeStyle=['#645d9c','#9ba3e5','#d8ffff'][i];c.lineWidth=2;c.beginPath();c.arc(x,0,20+t*70+i*7,0,Math.PI*2);c.stroke();}for(let i=0;i<12;i++){let a=i*Math.PI/6,r=20+t*90;p(x+Math.cos(a)*r,Math.sin(a)*r,3,3,'#e1d3f5');}p(x-2,-12,4,24,'#f6efff');p(x-12,-2,24,4,'#f6efff');}
 else{let x=30+t*170;p(x-20,-3,17,6,'#6c83ac');p(x-10,-5,14,10,'#7ab7d2');p(x-4,-3,8,6,'#e0ffff');for(let i=0;i<6;i++)p(x-25-i*7,((i%3)-1)*5,2,2,'#ab9be5');}c.restore();};
})();
