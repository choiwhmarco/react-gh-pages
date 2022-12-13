import covid from "./covid.jpeg";
import main_feature from "./main-featured.png";
import salivary_protein from "./salivary_proteins.png";
import pubmed from "./pubmed-logo.png"

export const images = [
  { title: "Human Salivary Proteome Wiki (HSPW)", subtitle: "HSPW is a collaborative, community-based Web portal to more than 1,000 unique human saliva proteins identified by high-throughput proteomic technologies. The wiki is developed for the research community and the public to harness the knowledge in the data and to further enhance the value of the proteome. You are very welcome to share your thoughts in the forums; add your own data to the growing database; annotate the proteins; or just explore the site.", img: main_feature },
  {
    title: "Salivary Proteins",
    subtitle: 'A listing of putative salivary proteins can be found on the Category:Salivary Proteins page. Only proteins that have been manually annotated and reviewed by UniPort Exit Disclaimer staff (i.e. the Swiss-Prot subset), and have been identified by mass spectrometry experiments to be in human saliva are included. Proteins with 3D structures available from the Protein Data Bank Exit Disclaimer are listed in bold.',
    img: salivary_protein,
  },
  {
    title: "Publications",
    subtitle: 'The layout of the PubMed Citations table on the Category:PubMed Citations page. The table lists citations that are stored in the wiki by year. By default, citations from the current year will be displayed, but you can change the year using the drop down box labeled "Year selection." To access the PubMed Citations category page anywhere on the wiki, follow the Citations link under Browse on the navigation menu.',
    img: pubmed,
  },
  {
    title: "SARS COVID-19",
    subtitle: "Our new JCVI covid-19 data is available.",
    img: covid,
  },
];