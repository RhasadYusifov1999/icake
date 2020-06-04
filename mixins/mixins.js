export const cut_text = {
    filters: {
        cut_text(arg){
            if(arg){
                return arg.substr(0, 18) +"...";
            }
            else{}
        }
    }
}


export const importImage = {
    methods: {
        importImage(arg){
            return '/_nuxt'+arg;
        }
    }
}