var levels = [
  {
    helpTitle : "要素の種類で選択",
    selectorName : "タイプセレクタ",
    doThis : "お皿を選択してください",
    selector : "plate",
    syntax : "A",
    help : "<strong>A</strong> タイプのすべての要素を選択します。タイプとはタグの種類のことで、<tag>div</tag>、<tag>p</tag>、<tag>ul</tag> などが異なる要素タイプです。",
    examples : [
      '<strong>div</strong> はすべての <tag>div</tag> 要素を選択します。',
      '<strong>p</strong> はすべての <tag>p</tag> 要素を選択します。',
    ],
    boardMarkup: `
    <plate/>
    <plate/>
    `
  },
  {
    doThis : "お弁当箱を選択してください",
    selector : "bento",
    syntax : "A",
    helpTitle : "要素の種類で選択",
    selectorName : "タイプセレクタ",
    help : "<strong>A</strong> タイプのすべての要素を選択します。タイプとはタグの種類のことで、<tag>div</tag>、<tag>p</tag>、<tag>ul</tag> などが異なる要素タイプです。",
    examples : [
      '<strong>div</strong> はすべての <tag>div</tag> 要素を選択します。',
      '<strong>p</strong> はすべての <tag>p</tag> 要素を選択します。',
    ],
    boardMarkup: `
    <bento/>
    <plate/>
    <bento/>
    `
  },
  {
    doThis : "豪華なお皿を選択してください",
    selector : "#fancy",
    selectorName: "IDセレクタ",
    helpTitle: "IDで要素を選択",
    syntax: "#id",
    help : '特定の <strong>id</strong> を持つ要素を選択します。IDセレクタはタイプセレクタと組み合わせることもできます。',
    examples : [
      '<strong>#cool</strong> は <strong>id="cool"</strong> を持つ要素を選択します。',
      '<strong>ul#long</strong> は <tag>ul id="long"</tag> を選択します。'
    ],
    boardMarkup : `
    <plate id="fancy"/>
    <plate/>
    <bento/>
    `
  },
  {
    helpTitle: "要素の中の要素を選択",
    selectorName : "子孫セレクタ",
    doThis : "お皿の上のリンゴを選択してください",
    selector : "plate apple",
    syntax: "A&nbsp;&nbsp;B",
    help : "すべての <strong>B</strong> を <strong>A</strong> の中で選択します。 <strong>B</strong> は別の要素の中にあるため、子孫と呼ばれます。",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> はすべての <tag>strong</tag> 要素を任意の <tag>p</tag> の中で選択します。',
      '<strong>#fancy&nbsp;&nbsp;span</strong> は <strong>id="fancy"</strong> を持つ要素の中の任意の <tag>span</tag> 要素を選択します。',
    ],
    boardMarkup : `
    <bento/>
    <plate>
      <apple/>
    </plate>
    <apple/>
    `
  },
  {
    doThis : "豪華なお皿の上のピクルスを選択してください",
    selector : "#fancy pickle",
    helpTitle: "子孫セレクタとIDセレクタの組み合わせ",
    syntax: "#id&nbsp;&nbsp;A",
    help : '任意のセレクタを子孫セレクタと組み合わせることができます。',
    examples : [
      '<strong>#cool&nbsp;span</strong> は <strong>id="cool"</strong> を持つ要素の中のすべての <tag>span</tag> 要素を選択します。'
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <plate id="fancy">
      <pickle/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    `
  },
  {
    doThis : "小さなリンゴを選択してください",
    selector : ".small",
    selectorName: "クラスセレクタ",
    helpTitle: "クラスで要素を選択",
    syntax: ".classname",
    help : 'クラスセレクタは、そのクラス属性を持つすべての要素を選択します。要素は1つのIDしか持てませんが、多くのクラスを持つことができます。',
    examples : [
    '<strong>.neato</strong> はすべての要素を選択します <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <apple/>
    <apple class="small"/>
    <plate>
      <apple class="small"/>
    </plate>
    <plate/>
    `
  },
  {
    doThis : "小さなオレンジを選択してください",
    selector : "orange.small",
    helpTitle: "クラスセレクタの組み合わせ",
    syntax: "A.className",
    help : 'クラスセレクタを他のセレクタと組み合わせることができます。たとえば、タイプセレクタと組み合わせることができます。',
    examples : [
      '<strong>ul.important</strong> はすべての <tag>ul</tag> 要素を選択します <strong>class="important"</strong>',
      '<strong>#big.wide</strong> はすべての要素を選択します <strong>id="big"</strong> かつ <strong>class="wide"</strong>'
    ],
    boardMarkup :`
    <apple/>
    <apple class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <plate>
      <orange/>
    </plate>
    <plate>
      <orange class="small"/>
    </plate>`
  },
  {
    doThis : "お弁当の中の小さなオレンジを選択してください",
    selector : "bento orange.small",
    syntax: "力を入れて！",
    helpTitle: "あなたはそれをすることができます...",
    help : 'このレベルで学んだことを組み合わせて、これを解決してください！',
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <apple class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },
  {
    doThis : "すべてのお皿とお弁当を選択してください",
    selector : "plate,bento",
    selectorName : "カンマコンビネータ",
    helpTitle: "カンマでセレクタを組み合わせる！",
    syntax : "A, B",
    help : 'シャトナー技術のおかげで、これはすべての <strong>A</strong> と <strong>B</strong> 要素を選択します。この方法で任意のセレクタを組み合わせることができ、2つ以上を指定することもできます。',
    examples: [
    '<strong>p, .fun</strong> はすべての <tag>p</tag> 要素と、すべての <strong>class="fun"</strong> を持つ要素を選択します。',
    '<strong>a, p, div</strong> はすべての <tag>a</tag>、<tag>p</tag>、<tag>div</tag> 要素を選択します。'
    ],
    boardMarkup : `
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <bento>
      <pickle/>
    </bento>
    <plate>
      <pickle/>
    </plate>
    <pickle/>
    <pickle class="small"/>
    `
  },
  {
    doThis : "すべてのものを選択してください！",
    selector : "*",
    selectorName:  "ユニバーサルセレクタ",
    helpTitle: "すべてのものを選択できます！",
    syntax : "*",
    help : 'ユニバーサルセレクタを使用して、すべての要素を選択できます！ ',
    examples : [
      '<strong>p *</strong> はすべての <tag>p</tag> 要素の中の任意の要素を選択します。',
    ],
    boardMarkup : `
    <apple/>
    <plate>
      <orange class="small" />
    </plate>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <plate id="fancy"/>
    `
  },
  {
    doThis : "お皿の上のすべての要素を選択してください",
    selector : "plate *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "ユニバーサルセレクタの組み合わせ",
    help : 'これは <strong>A</strong> の中のすべての要素を選択します。',
    examples : [
      '<strong>p *</strong> はすべての <tag>p</tag> 要素の中のすべての要素を選択します。',
      '<strong>ul.fancy *</strong> はすべての <tag>ul class="fancy"</tag> 要素の中のすべての要素を選択します。'
    ],
    boardMarkup: `
    <plate id="fancy">
      <orange class="small"/>
    </plate>
    <plate>
      <pickle/>
    </plate>
    <apple class="small"/>
    <plate>
      <apple/>
    </plate>`
  },
  {
    doThis : "お皿の隣にあるリンゴをすべて選択してください",
    selector : "plate + apple",
    helpTitle: "別の要素に直接続く要素を選択",
    selectorName: "隣接兄弟セレクタ",
    syntax : "A + B",
    help : "これはすべての <strong>B</strong> 要素を直接 <strong>A</strong> の後に続くものとして選択します。互いに続く要素は兄弟と呼ばれます。同じレベル、または深さにあります。 <br/><br/>このレベルのHTMLマークアップでは、同じインデントを持つ要素が兄弟です。",
    examples : [
      '<strong>p + .intro</strong> はすべての <strong>class="intro"</strong> を持つ要素を直接 <tag>p</tag> の後に続くものとして選択します。',
      '<strong>div + a</strong> はすべての <tag>a</tag> 要素を直接 <tag>div</tag> の後に続くものとして選択します。'
    ],
    boardMarkup : `
    <bento>
      <apple class="small"/>
    </bento>
    <plate />
    <apple class="small"/>
    <plate />
    <apple/>
    <apple class="small"/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "一般的な兄弟セレクタ",
    helpTitle: "別の要素の後に続く要素を選択",
    syntax: "A ~ B",
    doThis : "お弁当の隣にあるピクルスを選択してください",
    selector : "bento ~ pickle",
    help : "これは、ある要素のすべての兄弟要素を選択できます。これは隣接セレクタ (A + B) のようですが、1つではなく、すべての後続の要素を取得します。",
    examples : [
      '<strong>A ~ B</strong> は、ある <strong>A</strong> の後に続くすべての <strong>B</strong> を選択します。'
    ],
    boardMarkup : `
    <pickle/>
    <bento>
      <orange class="small"/>
    </bento>
    <pickle class="small"/>
    <pickle/>
    <plate>
      <pickle/>
    </plate>
    <plate>
      <pickle class="small"/>
    </plate>
    `
  },
  {
    selectorName: "子セレクタ",
    syntax: "A > B&nbsp;",
    doThis : "お皿の上に直接あるリンゴを選択してください",
    selector : "plate > apple",
    helpTitle: "要素の直接の子を選択",
    help : "他の要素の直接の子である要素を選択できます。子要素は、別の要素に直接ネストされている要素です。 <br><br>それよりも深くネストされている要素は、子孫要素と呼ばれます。",
    examples : [
      '<strong>A > B</strong> は、すべての <strong>B</strong> を直接の子として <strong>A</strong> の中で選択します。'
    ],
    boardMarkup: `
    <plate>
      <bento>
        <apple/>
      </bento>
    </plate>
    <plate>
      <apple/>
    </plate>
    <plate/>
    <apple/>
    <apple class="small"/>
    `
  },
  {
    selectorName: "最初の子擬似セレクタ",
    helpTitle: "別の要素の中の最初の子要素を選択",
    doThis : "一番上のオレンジを選択してください",
    selector : "plate :first-child",
    syntax: ":first-child",

    help : "最初の子要素を選択できます。子要素は、別の要素に直接ネストされている要素です。この擬似セレクタは他のセレクタと組み合わせることができます。",
    examples : [
      '<strong>:first-child</strong> はすべての最初の子要素を選択します。',
      '<strong>p:first-child</strong> はすべての最初の子 <tag>p</tag> 要素を選択します。',
      '<strong>div p:first-child</strong> はすべての <tag>div</tag> の中の最初の子 <tag>p</tag> 要素を選択します。'
    ],
    boardMarkup :`
    <bento/>
    <plate />
    <plate>
      <orange />
      <orange />
      <orange />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "唯一の子擬似セレクタ",
    helpTitle: "他の要素の中で唯一の要素を選択",
    doThis : "お皿の上のリンゴとピクルスを選択してください",
    selector : "plate :only-child",
    syntax: ":only-child",
    help : "他の要素の中で唯一の要素を選択できます。",
    examples : [
      '<strong>span:only-child</strong> は、他の要素の唯一の子である <tag>span</tag> 要素を選択します。',
      '<strong>ul li:only-child</strong> は、<tag>ul</tag> の中の唯一の <tag>li</tag> 要素を選択します。'
    ],
    boardMarkup : `
    <plate>
      <apple/>
    </plate>
    <plate>
      <pickle />
    </plate>
    <bento>
      <pickle />
    </bento>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "最後の子擬似セレクタ",
    helpTitle: "別の要素の中の最後の要素を選択",
    doThis : "小さなリンゴとピクルスを選択してください",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "このセレクタを使用して、別の要素の中の最後の子要素を選択できます。 <br><br>プロのヒント &rarr; 要素が1つだけの場合、その要素は最初の子、唯一の子、最後の子としてカウントされます！",
    examples : [
      '<strong>:last-child</strong> はすべての最後の子要素を選択します。',
      '<strong>span:last-child</strong> はすべての最後の子 <tag>span</tag> 要素を選択します。',
      '<strong>ul li:last-child</strong> は、任意の <tag>ul</tag> の中の最後の <tag>li</tag> 要素を選択します。'
    ],
    boardMarkup : `
    <plate id="fancy">
      <apple class="small"/>
    </plate>
    <plate/>
    <plate>
      <orange class="small"/>
      <orange>
    </plate>
    <pickle class="small"/>`
  },
  {
    selectorName: "Nth Child 擬似セレクタ",
    helpTitle: "別の要素の中の順序で要素を選択",
    doThis : "3番目のお皿を選択してください",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "別の要素の中の <strong>n番目</strong> (例: 1番目、3番目、12番目など) の子要素を選択します。",
    examples : [
      '<strong>:nth-child(8)</strong> は、別の要素の8番目の子であるすべての要素を選択します。',
      '<strong>div p:nth-child(2)</strong> は、すべての <strong>div</strong> の中の2番目の <strong>p</strong> を選択します。',
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    `
  },
  {
    selectorName: "Nth Last Child セレクタ",
    helpTitle: "別の要素の中の順序で要素を選択、後ろから数えて",
    doThis : "1番目のお弁当を選択してください",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "親の下部から子要素を選択します。これはnth-childのようですが、後ろから数えます！",
    examples : [
      '<strong>:nth-last-child(2)</strong> はすべての次の2番目の最後の子要素を選択します。'
    ],
    boardMarkup: `
    <plate/>
    <bento/>
    <plate>
      <orange/>
      <orange/>
      <orange/>
    </plate>
    <bento/>
    `
  },
  {
    selectorName: "最初のタイプセレクタ",
    helpTitle: "特定のタイプの最初の要素を選択",
    doThis : "最初のリンゴを選択してください",
    selector : "apple:first-of-type",
    syntax: ":first-of-type",
    help : "別の要素の中のそのタイプの最初の要素を選択します。",
    examples : [
      '<strong>span:first-of-type</strong> は、任意の要素の中の最初の <tag>span</tag> を選択します。'
    ],
    boardMarkup: `
    <orange class="small"/>
    <apple/>
    <apple class="small"/>
    <apple/>
    <apple class="small"/>
    <plate>
      <orange class="small"/>
      <orange/>
    </plate>
    `
  },
  {
    selectorName: "Nth of Type セレクタ",
    doThis: "すべての偶数のお皿を選択してください",
    selector: "plate:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "別の要素の中のそのタイプと順序に基づいて特定の要素を選択します - またはその要素の偶数または奇数のインスタンスを選択します。",
    examples: [
      '<strong>div:nth-of-type(2)</strong> は、2番目のdivのインスタンスを選択します。',
      '<strong>.example:nth-of-type(odd)</strong> は、exampleクラスのすべての奇数のインスタンスを選択します。'
    ],
    boardMarkup : `
    <plate/>
    <plate/>
    <plate/>
    <plate/>
    <plate id="fancy"/>
    <plate/>
    `
  },
  {
    selectorName: "Nth-of-type セレクタ with Formula",
    doThis: "3番目から始まるすべての2番目のお皿を選択してください",
    selector: "plate:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "nth-of-typeの数式は、特定のインスタンスからカウントを開始して、すべてのnth要素を選択します。",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> は、2番目のインスタンスから始まるすべての6番目のインスタンスの <tag>span</tag> を選択します。'
    ],
    boardMarkup : `
    <plate/>
    <plate>
      <pickle class="small" />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate/>
    <plate>
      <apple />
    </plate>
    <plate/>
    `
  },
  {
    selectorName: "Only of Type セレクタ",
    helpTitle: "親要素内でそのタイプの唯一の要素を選択",
    selector : "apple:only-of-type",
    syntax: ":only-of-type",
    doThis : "真ん中のお皿の上のリンゴを選択してください",
    help : "別の要素の中でそのタイプの唯一の要素を選択します。",
    examples : [
      '<strong>p span:only-of-type</strong> は、任意の <tag>p</tag> の中の唯一の <tag>span</tag> を選択します。'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
      <apple />
    </plate>
    <plate>
      <apple class="small" />
    </plate>
    <plate>
      <pickle />
    </plate>
    `
  },
  {
    selectorName: "Last of Type セレクタ",
    helpTitle: "特定のタイプの最後の要素を選択",
    doThis : "最後のリンゴとオレンジを選択してください",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "別の要素の中のそのタイプの最後の要素を選択します。タイプとはタグの種類を指します。したがって、<tag>p</tag> と <tag>span</tag> は異なるタイプです。 <br><br> 恐竜が絶滅する前に最後の恐竜が選ばれたのは、こんなふうだったのかな。",
    examples : [
      '<strong>div:last-of-type</strong> は、すべての要素の中の最後の <tag>div</tag> を選択します。',
      '<strong>p span:last-of-type</strong> は、すべての <tag>p</tag> の中の最後の <tag>span</tag> を選択します。'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <pickle />
    <pickle />
    <apple class="small" />
    <apple class="small" />
    `
  },
  {
    selectorName: "Empty セレクタ",
    helpTitle: "子を持たない要素を選択",
    doThis : "空のお弁当を選択してください",
    selector : "bento:empty",
    syntax: ":empty",
    help : "内部に他の要素を持たない要素を選択します。",
    examples : [
      '<strong>div:empty</strong> はすべての空の <tag>div</tag> 要素を選択します。'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <pickle class="small"/>
    </bento>
    <plate/>
    <bento/>`
  },
  {
    selectorName: "否定擬似クラス",
    helpTitle: "否定セレクタに一致しないすべての要素を選択",
    doThis : "大きなリンゴを選択してください",
    selector : "apple:not(.small)",
    syntax: ":not(X)",
    help : 'セレクタ <strong>"X"</strong> に一致しないすべての要素を選択できます。',
    examples : [
      '<strong>:not(#fancy)</strong> は、<strong>id="fancy"</strong> を持たないすべての要素を選択します。',
      '<strong>div:not(:first-child)</strong> は、最初の子でないすべての <tag>div</tag> を選択します。',
      '<strong>:not(.big, .medium)</strong> は、<strong>class="big"</strong> または <strong>class="medium"</strong> を持たないすべての要素を選択します。'
    ],
    boardMarkup: `
    <plate id="fancy">
      <apple class="small" />
    </plate>
    <plate>
      <apple />
    </plate>
    <apple />
    <plate>
      <orange class="small" />
    </plate>
    <pickle class="small" />
    `
  },
  {
    selectorName: "属性セレクタ",
    helpTitle: "特定の属性を持つすべての要素を選択",
    doThis : "誰かのためのアイテムを選択してください",
    selector : "[for]",
    syntax: "[attribute]",
    help : '属性は、要素のオープニングタグの中に次のように表示されます: <tag>span attribute="value"</tag>。属性には必ずしも値があるわけではなく、空白のままにすることもできます！',
    examples : [
      '<strong>a[href]</strong> は、すべての <tag>a</tag> 要素を選択します <strong>href="anything"</strong> 属性を持つもの。',
      '<strong>[type]</strong> は、すべての要素を選択します <strong>type="anything"</strong>。 属性'
    ],
    boardMarkup:`
    <bento><apple class="small"/></bento>
    <apple for="Ethan"/>
    <plate for="Alice"><pickle/></plate>
    <bento for="Clara"><orange/></bento>
    <pickle/>`
  },
  {
    selectorName: "属性セレクタ",
    helpTitle: "特定の属性を持つすべての要素を選択",
    doThis : "誰かのためのお皿を選択してください",
    selector : "plate[for]",
    syntax: "A[attribute]",
    help : "属性セレクタを別のセレクタ（タグ名セレクタなど）と組み合わせて、セレクタの後ろに追加します。",
    examples : [
      '<strong>[value]</strong> は、<strong>value="anything"</strong> 属性を持つすべての要素を選択します。',
      '<strong>a[href]</strong> は、すべての <tag>a</tag> 要素を選択します <strong>href="anything"</strong> 属性を持つもの。',
      '<strong>input[disabled]</strong> は、<tag>input</tag> 要素のすべてを選択します <strong>disabled</strong> 属性を持つもの'
    ],
    boardMarkup:`
    <plate for="Sarah"><pickle/></plate>
    <plate for="Luke"><apple/></plate>
    <plate/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "属性値セレクタ",
    helpTitle: "特定の属性値を持つすべての要素を選択",
    doThis : "ビタリーの食事を選択してください",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "属性セレクタは大文字と小文字を区別します。各文字は正確に一致する必要があります。",
    examples : [
      '<strong>input[type="checkbox"]</strong> は、すべてのチェックボックス入力要素を選択します。'
    ],
    boardMarkup:`
    <apple for="Alexei" />
    <bento for="Albina"><apple /></bento>
    <bento for="Vitaly"><orange/></bento>
    <pickle/>
    `
  },
  {
    selectorName: "属性スタートウィズセレクタ",
    helpTitle: "特定の文字で始まる属性値を持つすべての要素を選択",
    doThis : "「Sa」で始まる名前のアイテムを選択してください",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "セレクタの値の周りに引用符を使用するかどうかは任意です！",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> は、クラス <strong>toy</strong> と、いずれかの <strong>category="Swimwear"</strong> または <strong>category="Swimming"</strong> を持つ要素を選択します。'
    ],
    boardMarkup: `
    <plate for="Sam"><pickle/></plate>
    <bento for="Sarah"><apple class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "属性エンズウィズセレクタ",
    helpTitle: "特定の文字で終わる属性値を持つすべての要素を選択",
    doThis : "「ato」で終わる名前のアイテムを選択してください",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> は、すべての画像を表示する <strong>.jpg</strong> 画像を選択します。',
    ],
    boardMarkup:`
    <apple class="small"/>
    <bento for="Hayato"><pickle/></bento>
    <apple for="Ryota"></apple>
    <plate for="Minato"><orange/></plate>
    <pickle class="small"/>
    `
  },
  {
    selectorName: "属性ワイルドカードセレクタ",
    helpTitle: "特定の文字を含む属性値を持つすべての要素を選択",
    syntax: '[attribute*="value"]',
    doThis : "「obb」を含む名前の食事を選択してください",
    selector : '[for*="obb"]',
    help : 'class、href、src 属性などの中で共通のパターンを特定できる場合に便利なセレクタです。',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> は、"thumbnails" フォルダから画像を表示するすべての画像要素を選択します。',
      '<strong>[class*="heading"]</strong> は、"heading" をクラスに持つすべての要素を選択します。たとえば、<strong>class="main-heading"</strong> や <strong>class="sub-heading"</strong> などです。'
    ],
    boardMarkup:`
    <bento for="Robbie"><apple /></bento>
    <bento for="Timmy"><pickle /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
