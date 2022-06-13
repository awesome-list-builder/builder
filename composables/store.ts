import { reactive } from 'vue'

interface IAwesomeList {
    id: number
    name: string
    link?: string
    description?: string
    items?: IAwesomeList[]
}

class AwesomeList {
    data: IAwesomeList[]
    markdown: string
    constructor(awesomeList: IAwesomeList[]) {
        this.data = awesomeList
        this.markdown = ``
        this.generateMarkdown()
    }

    private breakLine() {
        this.markdown += '\n'
    }

    public generateMarkdown() {
        this.markdown = `## Contents\n`
        this.breakLine()
        if (this.data.length > 0) {
            this.data.forEach(content => {
                this.markdown += `- [${content.name}](#${content.name.toLowerCase().replaceAll(' ', '-')})\n`
            })
            this.breakLine()
            this.data.forEach(content => {
                this.markdown += `## ${content.name}\n`
                this.breakLine()
                content.items.forEach(item => {
                    this.markdown += `- ${item.link ? '[' : ''}${item.name}${item.link ? ']' : ''}${item.link ? `(${item.link})` : ''}${item.description ? ` - ${item.description}` : ''}\n`
                    if (item.items && item.items.length > 0) {
                        item.items.forEach(subItem => {
                            this.markdown += `	- ${subItem.link ? '[' : ''}${subItem.name}${subItem.link ? ']' : ''}${subItem.link ? `(${subItem.link})` : ''}${subItem.description ? ` - ${subItem.description}` : ''}\n`
                        })
                    }
                })
                this.breakLine()
            })
        }
    }
}

class AwesomeListMarkdown {
    beforeList: string
    afterList: string
    full: string

    constructor(beforeList: string, list: string, afterList: string) {
        this.beforeList = beforeList
        this.afterList = afterList
        this.full = beforeList + list + afterList
    }
}

export const store = reactive({
    list: new AwesomeList(new Array<IAwesomeList>()),
    document: new AwesomeListMarkdown('', '', '')
})

