<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<jsp:include page="header.jsp">
    <jsp:param value="title" name="StreepjesApp | add person"/>
</jsp:include>

<form:form method="post" action="${pageContext.request.contextPath}/person.htm" novalidate="novalidate" modelAttribute="person">
    <!-- novalidate in order to be able to run tests correctly -->
    <p class="form-group">
        <label for="totem" class="control-label">Totem:</label>
        <form:input id = "totem" path="totem"/>
        <form:errors path="totem" cssClass="error" element="p"/>
    </p>
    <p class="form-group">
        <label for="firstName" class="control-label"><spring:message code="label.firstname" />:</label>
        <form:input id="firstName" path="firstName"/>
        <form:errors path="firstName" cssClass="error" element="p"/>
    </p>
    <p class="form-group">
        <label for="lastName" class="control-label"><spring:message code="label.lastname" />:</label>
        <form:input id="lastName" path="lastName"/>
        <form:errors path="lastName" cssClass="error" element="p"/>
    </p>
    <p class="form-group">
        <label for="password"  class="password-field"><spring:message code="label.password" />:</label>
        <form:password id="password" path="password"/>
        <form:errors path="lastName" cssClass="error" element="p"/>
    </p>
    <p>
        <input type="submit" id="save" value="Save">
    </p>
</form:form>

<jsp:include page="footer.jsp"></jsp:include>
