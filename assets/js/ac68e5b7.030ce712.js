(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[881],{47903:e=>{const t="sapling",n="https://github.com/facebook/sapling";function l(e){return n+"/"+e}const a=l("releases/latest");e.exports={gitHubRepoName:t,gitHubRepo:n,gitHubRepoUrl:l,latestReleasePage:a}},920:(e,t,n)=>{"use strict";n.d(t,{RJ:()=>s,Xj:()=>d,bv:()=>r,mY:()=>o,nk:()=>u});var l=n(67294),a=n(44996),i=n(50941);function o(e){let{name:t,linkText:n}=e;const i=function(e){switch(e){case"go":return"goto";case"isl":return"web"}return e}(t),o=null!=n?n:t;return l.createElement("a",{href:(0,a.default)("/docs/commands/"+i)},l.createElement("code",null,o))}function d(e){let{name:t}=e;return l.createElement(o,{name:t,linkText:"sl "+t})}function r(){return l.createElement("p",{style:{textAlign:"center"}},l.createElement("img",{src:(0,a.default)("/img/reviewstack-demo.gif"),width:800,align:"center"}))}function s(e){let{alt:t,light:n,dark:o}=e;return l.createElement(i.Z,{alt:t,sources:{light:(0,a.default)(n),dark:(0,a.default)(o)}})}function u(e){let{src:t}=e;return l.createElement("video",{controls:!0},l.createElement("source",{src:(0,a.default)(t)}))}},8961:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>C,frontMatter:()=>x,metadata:()=>w,toc:()=>k});var l=n(83117),a=(n(67294),n(3905)),i=n(47903),o=n(920);const d=[{apiUrl:"https://api.github.com/repos/facebook/sapling/releases/assets/88118550",contentType:"application/x-gtar",createdAt:"2022-12-14T01:39:17Z",downloadCount:1,id:"RA_kwDOA3c_bc4FQJUW",label:"",name:"sapling_0.1.20221213-150011-h9b0acf12.arm64_monterey.bottle.tar.gz",size:25425984,state:"uploaded",updatedAt:"2022-12-14T01:39:19Z",url:"https://github.com/facebook/sapling/releases/download/0.1.20221213-150011-h9b0acf12/sapling_0.1.20221213-150011-h9b0acf12.arm64_monterey.bottle.tar.gz"},{apiUrl:"https://api.github.com/repos/facebook/sapling/releases/assets/88119081",contentType:"application/x-gtar",createdAt:"2022-12-14T01:46:52Z",downloadCount:0,id:"RA_kwDOA3c_bc4FQJcp",label:"",name:"sapling_0.1.20221213-150011-h9b0acf12.monterey.bottle.tar.gz",size:25984462,state:"uploaded",updatedAt:"2022-12-14T01:46:53Z",url:"https://github.com/facebook/sapling/releases/download/0.1.20221213-150011-h9b0acf12/sapling_0.1.20221213-150011-h9b0acf12.monterey.bottle.tar.gz"},{apiUrl:"https://api.github.com/repos/facebook/sapling/releases/assets/88117726",contentType:"application/x-debian-package",createdAt:"2022-12-14T01:28:08Z",downloadCount:0,id:"RA_kwDOA3c_bc4FQJHe",label:"",name:"sapling_0.1.20221213-150011-h9b0acf12_amd64.Ubuntu20.04.deb",size:19859856,state:"uploaded",updatedAt:"2022-12-14T01:28:10Z",url:"https://github.com/facebook/sapling/releases/download/0.1.20221213-150011-h9b0acf12/sapling_0.1.20221213-150011-h9b0acf12_amd64.Ubuntu20.04.deb"},{apiUrl:"https://api.github.com/repos/facebook/sapling/releases/assets/88117747",contentType:"application/x-debian-package",createdAt:"2022-12-14T01:28:21Z",downloadCount:3,id:"RA_kwDOA3c_bc4FQJHz",label:"",name:"sapling_0.1.20221213-150011-h9b0acf12_amd64.Ubuntu22.04.deb",size:21315108,state:"uploaded",updatedAt:"2022-12-14T01:28:22Z",url:"https://github.com/facebook/sapling/releases/download/0.1.20221213-150011-h9b0acf12/sapling_0.1.20221213-150011-h9b0acf12_amd64.Ubuntu22.04.deb"},{apiUrl:"https://api.github.com/repos/facebook/sapling/releases/assets/88118679",contentType:"application/zip",createdAt:"2022-12-14T01:41:09Z",downloadCount:1,id:"RA_kwDOA3c_bc4FQJWX",label:"",name:"sapling_windows_0.1.20221213-150011-h9b0acf12_amd64.zip",size:44659318,state:"uploaded",updatedAt:"2022-12-14T01:41:11Z",url:"https://github.com/facebook/sapling/releases/download/0.1.20221213-150011-h9b0acf12/sapling_windows_0.1.20221213-150011-h9b0acf12_amd64.zip"}];function r(e){for(const t of d)if(t.name.includes(e))return t;return null}const s="0.1.20221213-150011-h9b0acf12",u=r("arm64_monterey.bottle.tar.gz"),m=r(".monterey.bottle.tar.gz"),p=r("Ubuntu20.04.deb"),c=r("Ubuntu22.04.deb"),b=r("sapling_windows");var h=n(20625),g=n.n(h);const x={sidebar_position:10},f="Installation",w={unversionedId:"introduction/installation",id:"introduction/installation",title:"Installation",description:"The latest release is .",source:"@site/docs/introduction/installation.md",sourceDirName:"introduction",slug:"/introduction/installation",permalink:"/docs/introduction/installation",draft:!1,editUrl:"https://github.com/facebookexperimental/eden/tree/main/website/docs/introduction/installation.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Sapling SCM",permalink:"/docs/introduction/"},next:{title:"Getting started",permalink:"/docs/introduction/getting-started"}},y={},k=[{value:"Prebuilt binaries",id:"prebuilt-binaries",level:2},{value:"macOS",id:"macos",level:3},{value:"Installing from Homebrew-core",id:"installing-from-homebrew-core",level:4},{value:"Installing from our prebuilt bottles",id:"installing-from-our-prebuilt-bottles",level:4},{value:"Apple silicon (arm64)",id:"apple-silicon-arm64",level:5},{value:"Intel (x86_64)",id:"intel-x86_64",level:5},{value:"Windows",id:"windows",level:3},{value:"Linux",id:"linux",level:3},{value:"Ubuntu 22.04",id:"ubuntu-2204",level:4},{value:"Ubuntu 20.04",id:"ubuntu-2004",level:4},{value:"Other Linux distros",id:"other-linux-distros",level:4},{value:"Building from source",id:"building-from-source",level:2}],v={toc:k};function C(e){let{components:t,...n}=e;return(0,a.mdx)("wrapper",(0,l.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"installation"},"Installation"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("a",{href:i.latestReleasePage},"latest release")," is ",(0,a.mdx)("code",null,s),"."),(0,a.mdx)("h2",{id:"prebuilt-binaries"},"Prebuilt binaries"),(0,a.mdx)("h3",{id:"macos"},"macOS"),(0,a.mdx)("p",null,"First, make sure that ",(0,a.mdx)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew")," is installed on your system. Then either install directly from Homebrew-core or install the bottle released by us:"),(0,a.mdx)("h4",{id:"installing-from-homebrew-core"},"Installing from Homebrew-core"),(0,a.mdx)("p",null,"Just run:"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"brew install sapling"),(0,a.mdx)("h4",{id:"installing-from-our-prebuilt-bottles"},"Installing from our prebuilt bottles"),(0,a.mdx)("p",null,"Follow the instructions depending on your architecture."),(0,a.mdx)("h5",{id:"apple-silicon-arm64"},"Apple silicon (arm64)"),(0,a.mdx)("p",null,"Download using ",(0,a.mdx)("inlineCode",{parentName:"p"},"curl"),":"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"curl -L -O ",u.url),(0,a.mdx)("p",null,"Then install:"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"brew install ./",u.name),(0,a.mdx)("h5",{id:"intel-x86_64"},"Intel (x86_64)"),(0,a.mdx)("p",null,"Download using ",(0,a.mdx)("inlineCode",{parentName:"p"},"curl"),":"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"curl -L -O ",m.url),(0,a.mdx)("p",null,"Then install:"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"brew install ./",m.name),(0,a.mdx)("admonition",{type:"caution"},(0,a.mdx)("p",{parentName:"admonition"},"Downloading the bottle using a web browser instead of ",(0,a.mdx)("inlineCode",{parentName:"p"},"curl"),' will cause macOS to tag Sapling as "untrusted" and the security manager will prevent you from running it. You can remove this annotation as follows:'),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"xattr -r -d com.apple.quarantine ~/Downloads/",u.name)),(0,a.mdx)("p",null,"Note that to clone larger repositories, you need to change the open files limit. We recommend doing it now so it doesn't bite you in the future:"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},'echo "ulimit -n 1048576 1048576" >> ~/.bash_profile',"\n",'echo "ulimit -n 1048576 1048576" >> ~/.zshrc'),(0,a.mdx)("h3",{id:"windows"},"Windows"),(0,a.mdx)("p",null,"After downloading the ",(0,a.mdx)("inlineCode",{parentName:"p"},"sapling_windows")," ZIP from the ",(0,a.mdx)("a",{href:i.latestReleasePage},"latest release"),", run the following in PowerShell as Administrator (substituting the name of the ",(0,a.mdx)("inlineCode",{parentName:"p"},".zip")," file you downloaded, as appropriate):"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"PS> Expand-Archive ~/Downloads/",b.name," 'C:\\Program Files'","\n"),(0,a.mdx)("p",null,"This will create ",(0,a.mdx)("inlineCode",{parentName:"p"},"C:\\Program Files\\Sapling"),", which you likely want to add to your ",(0,a.mdx)("inlineCode",{parentName:"p"},"%PATH%")," environment variable using:"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},'PS> setx PATH "$env:PATH;C:\\Program Files\\Sapling" -m'),(0,a.mdx)("p",null,"Note the following tools must be installed to leverage Sapling's full feature set:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://git-scm.com/download/win"},"Git for Windows")," is required to use Sapling with Git repositories"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," (v10 or later) is required to use ",(0,a.mdx)(o.Xj,{name:"web",mdxType:"SLCommand"}))),(0,a.mdx)("p",null,"Note that the name of the Sapling CLI ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl.exe")," conflicts with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl")," shell built-in in PowerShell (",(0,a.mdx)("inlineCode",{parentName:"p"},"sl")," is an alias for ",(0,a.mdx)("inlineCode",{parentName:"p"},"Set-Location"),", which is equivalent to ",(0,a.mdx)("inlineCode",{parentName:"p"},"cd"),"). If you want to use ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl")," to run ",(0,a.mdx)("inlineCode",{parentName:"p"},"sl.exe")," in PowerShell, you must reassign the alias. Again, you must run the following as Administrator:"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"PS> Set-Alias -Name sl -Value 'C:\\Program Files\\Sapling\\sl.exe' -Force -Option Constant,ReadOnly,AllScope","\n","PS> sl --version","\n","Sapling ",s),(0,a.mdx)("h3",{id:"linux"},"Linux"),(0,a.mdx)("h4",{id:"ubuntu-2204"},"Ubuntu 22.04"),(0,a.mdx)("p",null,"Download using ",(0,a.mdx)("inlineCode",{parentName:"p"},"curl"),":"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"curl -L -O ",c.url),(0,a.mdx)("p",null,"Then install:"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"sudo apt install -y ./",c.name),(0,a.mdx)("h4",{id:"ubuntu-2004"},"Ubuntu 20.04"),(0,a.mdx)("p",null,"Download using ",(0,a.mdx)("inlineCode",{parentName:"p"},"curl"),":"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"curl -L -O ",p.url),(0,a.mdx)("p",null,"Then install:"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"sudo apt install -y ./",p.name),(0,a.mdx)("h4",{id:"other-linux-distros"},"Other Linux distros"),(0,a.mdx)("p",null,"Sapling can be installed from Homebrew on Linux. First install Homebrew on your machine, then run"),(0,a.mdx)(g(),{mdxType:"CodeBlock"},"brew install sapling"),(0,a.mdx)("h2",{id:"building-from-source"},"Building from source"),(0,a.mdx)("p",null,"In order to build from source, you need at least the following tools available in your environment:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Make"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"g++")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.rust-lang.org/tools/install"},"Rust")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://yarnpkg.com/getting-started/install"},"Yarn"))),(0,a.mdx)("p",null,"For the full list, find the appropriate ",(0,a.mdx)("inlineCode",{parentName:"p"},"Dockerfile")," for your platform that defines the image that is used for Sapling builds in automation to see which tools it installs. For example, ",(0,a.mdx)("a",{href:i.gitHubRepo+"/blob/main/.github/workflows/sapling-cli-ubuntu-22.04.Dockerfile"},(0,a.mdx)("code",null,".github/workflows/sapling-cli-ubuntu-22.04.Dockerfile"))," reveals all of the packages you need to install via ",(0,a.mdx)("inlineCode",{parentName:"p"},"apt-get")," in the host environment in order to build Sapling from source."),(0,a.mdx)("p",null,"Once you have your environment set up, you can do a build as follows:"),(0,a.mdx)("pre",null,"git clone "+i.gitHubRepo+"\ncd "+i.gitHubRepoName+"/eden/scm\nmake oss\n./sl --help\n"),(0,a.mdx)("p",null,"Though the Windows build is slightly different:"),(0,a.mdx)("pre",null,"git clone "+i.gitHubRepo+"\ncd "+i.gitHubRepoName+"/eden/scm\npython3 .\\packaging\\windows\\build_windows_zip.py\n.\\build\\embedded\\sl.exe --help\n"),(0,a.mdx)("p",null,"Once you have Sapling installed, follow the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/introduction/getting-started"},"Getting Started")," instructions."))}C.isMDXComponent=!0}}]);