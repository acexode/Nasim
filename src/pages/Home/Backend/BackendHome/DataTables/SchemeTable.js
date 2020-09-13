import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';  
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import npower from '../../../../../assets/npower.jpg'
import tradermoni from '../../../../../assets/trader-moni.png'
import axios from "axios";
import './datatable.scss'
import data from './scheme.json'
const { SearchBar, ClearSearchButton } = Search;
function priceFormatter(cell, row) {
  console.log(row)
  if (row.Status) {
    return (
      <p className='cellActive'>
        <strong>Active</strong>
      </p>
    );
  }
  return (
      <p className='cellPending'>
        <strong>Pending</strong>
      </p>
    
  );
}
function nameFormatter(cell, row) { 
    if(cell == "N- Power"){
      return (
        <div className='d-flex'>
          <p className='mask'>
          <img src={npower} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>
  
          </p>
          <span> { cell } </span>
        </div>
      );
    } 
    return (
      <div className='d-flex'>
        <p className='mask'>
        <img src={tradermoni} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""/>

        </p>
        <span> { cell } </span>
      </div>
    );
}
function beneficiariesFormatter(cell, row) {  
    return (
      <a className="click-to-view-benefi">Click to see beneficiaries</a>
    );
}
export class SchemeTable extends Component {
  state = {
    employee: [],

    columns: [     

      {
        dataField: "Name",

        text: "Scheme Name",
        formatter: nameFormatter,
        sort: true,
      },
      {
        dataField: "Code",

        text: "Code",

        sort: true,
      },
      {
        dataField: "Date",

        text: "Date Created",

        sort: true,
      },
      {
        dataField: "Sponsor",

        text: "Sponsor",

        sort: true,
      },

      {
        dataField: "Beneficiaries",

        text: "Beneficiaries",
        formatter: beneficiariesFormatter,
        sort: true,
      },

      {
        dataField: "Status",
        text: "Status",
        formatter: priceFormatter,
        sort: true,
      },
    ],
  };
  
  componentDidMount() {
	console.log(data)
    // axios.get("./mock.json").then((response) => {
	// 	console.log(response)
    //   console.log(response.data);

      this.setState({
        employee: data,
      });
    // });
  }

  render() {
    
	const defaultSorted = [{
		dataField: 'Name',
		order: 'desc'
	  }];
    return (
      <div className="container">
        

        <div
          style={{
            marginTop: 20,
          }}
        >
			  <ToolkitProvider
  keyField="id"
  data={this.state.employee}
  columns={this.state.columns}
  search
>
  {
    props => (
      <div>
        <div class="page-header">
						<div class="row align-items-center">
							<div class="col-12 my-2">
								<h3 class="scheme-report">Scheme Report</h3>
								
							</div>
							<div class="col ">							
                  <SearchBar { ...props.searchProps } placeholder="Search by Scheme Name, Scheme Code" className="search-scheme" />       
								
							</div>
							<div class="col-auto float-right ml-auto mb-2">
								<a href="#" class="btn add-btn" data-toggle="modal" data-target="#add_employee"><i class="fa fa-plus"></i> Add Scheme</a>
								
							</div>
						</div>
					</div>
        
        <BootstrapTable
          { ...props.baseProps }
        />
        
      </div>
    )
  }
</ToolkitProvider>
    
        </div>
      </div>
    );
  }
}

export default SchemeTable;
