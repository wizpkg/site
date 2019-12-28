import React from "react";

import ReactMarkdown from "react-markdown";
import "./index.css";

import ButtonLink from "../components/ButtonLink.js"

const mdComponents = `
# Components
| Name        | Role                                                                                                                     |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| Wiz Core    | An extensible, functional, distributed package manager with a focus on Machine Learning projects                         |
| Wiz Tasks   | To run a DAG of generic tasks. Wiz ETL is built on this framework                                                        |
| Wiz Sources | To continously fetch data from updating sources                                                                          |
| Wiz Data    | To store data in whatever format available, either as unstrucutured/raw or in a database. Likely built on FoundationDB   |
| Wiz ETL     | To transform and harmonize the data across sources, preprocess, etc                                                      |
| Wiz Viz     | To perform effective server-side visualization of large data sets using a slightly modified version of the Vega standard |

# Wiz Data

The data flowing between components of Wiz is one of the most important components of the framework, and arguably the most difficult to make decisions for.

Unlike other frameworks like Apache Beam, Wiz does not provide explicit structures that the data must fit into, and does not provide any additional features on top of the data except for Provenance, which provides detailed auditing data about every record and file in the system.

Wiz has two types of data: records and folders/files

Records are processable logical records, which originate from files in any the supported formats including:
- csv, tsv, etc
- json
- avro
- parquet
- protobuf

The record-level features allow Wiz to parallelize operations effectively based on heuristics about each processor.

Records do not specifically mean only row-based data. They can also represent unstructured documents and columns of a dataset. 

# Wiz Task Framework/Wiz ETL

Overview: the ability to easily configure and perform a DAG of data transformations on big data with streaming features and multiple representations.

Beam does somethin similar: https://beam.apache.org/documentation/programming-guide

## Specification components

1. A spec for a the generic architecture of Wiz ETL
2. A spec for the configuration of individual processors
3. A set of basic processors and their configuration

## Implementation

The Wiz ETL implementation is written in Golang and is fully compliant with the specification. We also have a process for developing new processors and adopting them into the specification.
## Architecture
Wiz ETL represents its data transformation tasks as a Directed Acyclic Graph (DAG). 

It can take a plurality of **data sources**. If the data is a streaming data source, it can be **refreshed**. <!-- ? -->

Each step in the DAG is a **processor**, which processes or transforms the data and can return an output. Each processor can have special configuration that modifies its behavior.

The power of Wiz ETL comes from the ability to do this at a large scale effectively, across a distributed cluster of nodes.

A **node** is a logical computing unit that can run a **processor**. It may be a physical or virtual machine, or a logical node in an orchestration environment like Kubernetes.

Most existing orchestration tools provide **schedulers** which determine where a given workload gets provisioned in the cluster. For the sake of simplicity, Wiz ETL will use those default schedulers by building on top of their existing APIs and working with the workload placement of each of the processors.

However, when designing a big data system of this scale, there are often much more complex considerations to take into account, including: network and data access topolgoies (e.g. bandwidth between nodes, and storage devices), the availability and location of specialized compute accelerators like GPUs, etc. High performance computing (HPC) systems take all of this into account. 

Therefore, in the future, it may be possible that Wiz ETL will:
1. provide a mechanism for specifying additional topology information and associating that with existing systems (physical machines/clusters or orchestrating systems) and
2. provide an algorithm for using APIs to schedule the proccessors to take advantage of that information

For now, this is left to the future

### Wiz ETL data philosophy
For many big data systems, data is a first class citizen and is often serialized, stored or manipulated as a first class citizen of the system itself. (https://flink.apache.org/flink-applications.html)

However, Wiz ETL fundamentally believes that the next era of data solutions will need multi-modal data that is transformed and eventually stored in a mult data-model database like FoundationDB.

Wiz ETL supports a wide array of data access mechanisms and databases for a variety of use-cases. However, the benefit of storing data in Wiz Data is evident.

`;

export default function Docs() {
  return (
    <>
      <div className="full flex">
        <div className="center box flex docs">
          <h1>Documentation</h1>
          <p>Wiz Project v0.1.0</p>
          <ButtonLink href="/" outline theme="warning">
            Home
          </ButtonLink>
        </div>
      </div>
      <div>
        <div className="features">
          <ReactMarkdown source={mdComponents} />
        </div>
        <div className="footer flex">
          <p className="center">&copy; 2019 Alex Kreidler</p>
        </div>
      </div>
    </>
  );
}
