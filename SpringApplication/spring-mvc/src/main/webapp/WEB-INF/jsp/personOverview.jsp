<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<jsp:include page="header.jsp">
    <jsp:param name="title" value="User Overview" />
    <jsp:param name="pageName" value="StreepjesApp | person overview" />
</jsp:include>


<table class="table">
    <tr>
        <th>Totem</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Streep</th>
        <th>StreepjesOverview</th>
        <th></th>
    </tr>
    <c:forEach var="person" items="${ persons }">

            <tr>
                <td><c:out value='${person.totem}' /></td>
                <td><c:out value='${person.firstName}' /></td>
                <td><c:out value='${person.lastName}' /></td>
                <td><a href="streepje/${person.id}.htm">Streep</a></td>
                <td><a href="streepje/overview/${person.id}.htm">Streepjes Overview</a></td>
                <td><a href="person/${person.id}.htm">Edit</a></td>
            </tr>
    </c:forEach>

    <caption>User Overview</caption>
</table>



<jsp:include page="footer.jsp"></jsp:include>