//Scores the survey according to the original algorithm from the original test
var score_survey = function(answers){
  console.log(answers);
};


//The following functions calculate the scores for the different types of Gifts
var leadership = function(ans){return ans[6]+ans[16]+ans[27]+ans[43]+ans[65];};
var administration = function(ans){return ans[1]+ans[17]+ans[31]+ans[47]+ans[59];};
var teaching = function(ans){return ans[2]+ans[18]+ans[33]+ans[61]+ans[73];};
var knowledge = function(ans){return ans[9]+ans[24]+ans[39]+ans[68]+ans[79];};
var wisdom = function(ans){return ans[3]+ans[19]+ans[48]+ans[62]+ans[74];};
var prophecy = function(ans){return ans[10]+ans[25]+ans[40]+ans[54]+ans[69];};
var discernment = function(ans){return ans[11]+ans[26]+ans[41]+ans[55]+ans[70];};
var exhortation = function(ans){return ans[20]+ans[34]+ans[49]+ans[63]+ans[75];};
var shepherding = function(ans){return ans[4]+ans[21]+ans[35]+ans[50]+ans[76];};
var faith = function(ans){return ans[12]+ans[28]+ans[42]+ans[56]+ans[80];};
var evangelism = function(ans){return ans[5]+ans[36]+ans[51]+ans[64]+ans[77];};
var apostleship = function(ans){return ans[13]+ans[29]+ans[44]+ans[57]+ans[71];};
var service = function(ans){return ans[14]+ans[30]+ans[46]+ans[58]+ans[72];};
var mercy = function(ans){return ans[7]+ans[22]+ans[37]+ans[52]+ans[66];};
var giving = function(ans){return ans[8]+ans[23]+ans[38]+ans[53]+ans[67];};
var hospitality = function(ans){return ans[15]+ans[32]+ans[45]+ans[60]+ans[78];};

