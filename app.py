import jinja2
import pdfkit
config = pdfkit.configuration(wkhtmltopdf='/usr/local/bin/wkhtmltopdf')
from datetime import datetime

my_name = "Frank Andrade"
item1 = "TV"
item2 = "Couch"
item3 = "Washing Machine"
today_date = datetime.today().strftime("%d %b, %Y")

context = {'my_name': my_name, 'item1': item1, 'item2': item2, 'item3': item3,
           'today_date': today_date}

template_loader = jinja2.FileSystemLoader('./')
template_env = jinja2.Environment(loader=template_loader)

template = template_env.get_template('pdf_template.html')
output_text = template.render(context)

pdfkit.from_html(output_text, 'pdf_generated.pdf', configuration=config)
