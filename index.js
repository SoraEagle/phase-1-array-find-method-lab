  function superbowlWin(records){
    let foundRecord = records.find(record => (record.result === 'W'))
    console.log(foundRecord);
    if(foundRecord)
    return foundRecord.year;
}
