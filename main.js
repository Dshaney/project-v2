function recursion(i) {
           console.log(i);
        i += 1;
        recursion(i)
}
async function main (){
recursion(0)
}

main()